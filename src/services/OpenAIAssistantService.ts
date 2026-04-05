import { OPENAI_API_KEY, OPENAI_ASSISTANT_ID, MENTAL_HEALTH_SYSTEM_PROMPT } from '../constants/config';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ThreadMessage {
  id: string;
  role: 'user' | 'assistant';
  content: { text: { value: string } }[];
}

class OpenAIAssistantService {
  private apiKey: string;
  private assistantId: string;
  private threadId: string | null = null;
  private history: OpenAIMessage[] = [];
  private useApiBackend: boolean = true;
  private quotaExceeded: boolean = false;
  private retryAfter: number = 0;

  constructor() {
    this.apiKey = OPENAI_API_KEY;
    this.assistantId = OPENAI_ASSISTANT_ID;
    
    // Validate API key format
    this.validateApiKey();
    
    // Add system prompt as the first message
    this.history.push({
      role: 'system',
      content: MENTAL_HEALTH_SYSTEM_PROMPT
    });
  }
  
  /**
   * Validate the API key format and log warnings if it doesn't match expected patterns
   */
  private validateApiKey(): void {
    if (!this.apiKey || this.apiKey === 'YOUR_OPENAI_API_KEY') {
      console.warn('OpenAI API key is not set. Please add your API key in config.ts');
      return;
    }
    
    // Standard OpenAI API keys typically start with 'sk-' followed by a random string
    const standardKeyPattern = /^sk-[a-zA-Z0-9]{32,}$/;
    
    // Project-specific API keys may have a different format
    const projectKeyPattern = /^sk-proj-[a-zA-Z0-9_-]{32,}$/;
    
    if (!standardKeyPattern.test(this.apiKey) && !projectKeyPattern.test(this.apiKey)) {
      console.warn('OpenAI API key format looks unusual. Standard keys start with "sk-" followed by a random string.');
      
      // If it's very long, it might contain extra characters
      if (this.apiKey.length > 100) {
        console.warn('API key is unusually long. Check for extra spaces or characters.');
      }
    }
  }

  // Flag to track if a request is in progress
  private isRequestInProgress: boolean = false;

  /**
   * Send a message to OpenAI Assistant and get a response
   * @param message The user's message
   * @returns The AI's response text
   */
  async sendMessage(message: string): Promise<string> {
    // Prevent multiple simultaneous API calls
    if (this.isRequestInProgress) {
      console.warn('A request is already in progress. Please wait for it to complete.');
      return this.getFallbackResponse(message) + ' (Note: Another request is already in progress. Please wait a moment before sending another message.)';
    }

    this.isRequestInProgress = true;

    try {
      console.log('Starting to process message:', message.substring(0, 20) + '...');
      
      // Add user message to history
      const userMessage: OpenAIMessage = {
        role: 'user',
        content: message
      };
      this.history.push(userMessage);

      // Check if we have a thread ID, if not create one
      if (!this.threadId) {
        console.log('No thread ID found, creating a new thread...');
        await this.createThread();
      }

      // Send message to the thread
      console.log('Adding message to thread...');
      const messageResponse = await this.addMessageToThread(message);
      
      // Run the assistant on the thread
      console.log('Running assistant on thread...');
      const runResponse = await this.runAssistant();
      
      // Set a timeout for the entire operation
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
          reject(new Error('Global timeout waiting for assistant response'));
        }, 45000); // 45 seconds global timeout
      });

      // Wait for the run to complete
      console.log('Waiting for run to complete...');
      const completedRun = await Promise.race([
        this.waitForRunCompletion(runResponse.id),
        timeoutPromise
      ]);
      
      // Get the assistant's response
      console.log('Getting thread messages...');
      const assistantMessages = await this.getThreadMessages();
      
      // The most recent message from the assistant should be the first one in the response
      if (assistantMessages.length > 0) {
        const latestMessage = assistantMessages[0];
        const responseText = latestMessage.content[0].text.value;
        
        // Add assistant response to history
        const assistantMessage: OpenAIMessage = {
          role: 'assistant',
          content: responseText
        };
        this.history.push(assistantMessage);
        
        console.log('Successfully received response from assistant');
        return responseText;
      } else {
        throw new Error('No response from OpenAI Assistant');
      }
    } catch (error) {
      console.error('Error sending message to OpenAI Assistant:', error);
      
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      let errorMessage = '';
      if ((error as TypeError).message?.includes('Network request failed')) {
        errorMessage = 'Network error: Please check your internet connection and API key configuration.';
        console.error(errorMessage);
      } else if ((error as Error).message?.includes('timeout')) {
        errorMessage = 'The request timed out. The OpenAI service might be experiencing high demand.';
        console.error(errorMessage);
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
        console.error(errorMessage);
      }
      
      // Use fallback response for any error
      const fallbackResponse = this.getFallbackResponse(message);
      
      // Add fallback response to history
      const mockMessage: OpenAIMessage = {
        role: 'assistant',
        content: fallbackResponse
      };
      this.history.push(mockMessage);
      
      return fallbackResponse;
    } finally {
      // Always reset the request in progress flag
      this.isRequestInProgress = false;
    }
  }

  /**
   * Create a new thread for the conversation
   */
  private async createThread(): Promise<void> {
    try {
      // Make sure we're using the correct API version for Assistants API
      const response = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({})
      });

      if (!response.ok) {
        // Try to get the detailed error message from the response
        try {
          const errorData = await response.json();
          console.error('Thread creation error details:', JSON.stringify(errorData));
          
          if (response.status === 401) {
            throw new Error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
          } else if (response.status === 400) {
            // Extract specific error message if available
            const errorMessage = errorData.error?.message || 'Bad request format';
            console.error('Full error response:', JSON.stringify(errorData));
            
            // Check for specific error types
            if (errorMessage.includes('API key format')) {
              throw new Error(`API key format error: ${errorMessage}. Try using a standard API key that starts with 'sk-'.`);
            } else if (errorMessage.includes('project')) {
              throw new Error(`Project API key error: ${errorMessage}. Project-specific API keys may not work with the Assistants API.`);
            } else if (errorMessage.includes('Assistants API') && errorMessage.includes('deprecated')) {
              throw new Error(`API version error: ${errorMessage}`);
            } else if (errorMessage.includes('invalid_beta')) {
              throw new Error(`API version error: The OpenAI Assistants API has been updated. Please check the code is using 'OpenAI-Beta: assistants=v2'.`);
            } else {
              throw new Error(`Bad request error: ${errorMessage}. Check API key format and parameters.`);
            }
          } else {
            throw new Error(`Failed to create thread: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
          }
        } catch (parseError) {
          // If we can't parse the error response, fall back to a generic error
          if (response.status === 401) {
            throw new Error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
          } else if (response.status === 400) {
            throw new Error('Bad request error: The request format is invalid. Check API key format and parameters.');
          } else {
            throw new Error(`Failed to create thread: ${response.status}`);
          }
        }
      }

      const data = await response.json();
      this.threadId = data.id;
      console.log('Created thread:', this.threadId);
    } catch (error) {
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      if ((error as TypeError).message?.includes('Network request failed')) {
        console.error('Network error creating thread: Please check your internet connection and API key configuration.');
      } else if (error instanceof Error) {
        console.error(`Error creating thread: ${error.message}`);
      } else {
        console.error('Error creating thread:', error);
      }
      
      // Rethrow the error to be handled by the calling function
      throw error;
    }
  }

  /**
   * Add a message to the thread
   * @param content The message content
   */
  private async addMessageToThread(content: string): Promise<any> {
    try {
      const response = await fetch(`https://api.openai.com/v1/threads/${this.threadId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({
          role: 'user',
          content: content
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
        } else {
          throw new Error(`Failed to add message: ${response.status}`);
        }
      }

      return await response.json();
    } catch (error) {
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      if ((error as TypeError).message?.includes('Network request failed')) {
        console.error('Network error adding message to thread: Please check your internet connection.');
      } else if (error instanceof Error) {
        console.error(`Error adding message to thread: ${error.message}`);
      } else {
        console.error('Error adding message to thread:', error);
      }
      
      // Rethrow the error to be handled by the calling function
      throw error;
    }
  }

  /**
   * Run the assistant on the thread
   */
  private async runAssistant(): Promise<any> {
    try {
      const response = await fetch(`https://api.openai.com/v1/threads/${this.threadId}/runs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({
          assistant_id: this.assistantId
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
        } else {
          throw new Error(`Failed to run assistant: ${response.status}`);
        }
      }

      return await response.json();
    } catch (error) {
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      if ((error as TypeError).message?.includes('Network request failed')) {
        console.error('Network error running assistant: Please check your internet connection.');
      } else if (error instanceof Error) {
        console.error(`Error running assistant: ${error.message}`);
      } else {
        console.error('Error running assistant:', error);
      }
      
      // Rethrow the error to be handled by the calling function
      throw error;
    }
  }

  /**
   * Wait for the run to complete
   * @param runId The ID of the run
   */
  private async waitForRunCompletion(runId: string): Promise<any> {
    const maxAttempts = 15; // Reduced maximum number of polling attempts
    const initialPollingInterval = 1000; // Initial polling interval in milliseconds
    const maxPollingInterval = 5000; // Maximum polling interval in milliseconds
    
    let attempts = 0;
    let pollingInterval = initialPollingInterval;
    
    // Set a global timeout for the entire polling operation
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Global timeout waiting for run completion'));
      }, 30000); // 30 seconds global timeout
    });
    
    try {
      const pollingPromise = new Promise(async (resolve, reject) => {
        while (attempts < maxAttempts) {
          try {
            console.log(`Polling attempt ${attempts + 1}/${maxAttempts} for run ${runId}`);
            
            const response = await fetch(`https://api.openai.com/v1/threads/${this.threadId}/runs/${runId}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'OpenAI-Beta': 'assistants=v2'
              }
            });

            if (!response.ok) {
              if (response.status === 401) {
                throw new Error('Authentication failed: Invalid API key');
              } else if (response.status === 429) {
                // Rate limit hit, back off significantly
                console.warn('Rate limit hit, backing off');
                pollingInterval = Math.min(pollingInterval * 2, maxPollingInterval);
                await new Promise(resolve => setTimeout(resolve, pollingInterval));
                attempts++;
                continue;
              } else {
                throw new Error(`Failed to get run status: ${response.status}`);
              }
            }

            const data = await response.json();
            console.log(`Run status: ${data.status}`);
            
            if (data.status === 'completed') {
              resolve(data);
              return;
            } else if (data.status === 'failed' || data.status === 'cancelled' || data.status === 'expired') {
              reject(new Error(`Run failed with status: ${data.status}`));
              return;
            }
            
            // Use exponential backoff for polling
            pollingInterval = Math.min(pollingInterval * 1.5, maxPollingInterval);
            await new Promise(resolve => setTimeout(resolve, pollingInterval));
            attempts++;
          } catch (error) {
            if ((error as Error).message.includes('Rate limit')) {
              // If we hit rate limits, back off and try again
              console.warn('Rate limit error, backing off');
              pollingInterval = Math.min(pollingInterval * 2, maxPollingInterval);
              await new Promise(resolve => setTimeout(resolve, pollingInterval));
              attempts++;
              continue;
            }
            
            reject(error);
            return;
          }
        }
        
        reject(new Error(`Run polling timed out after ${maxAttempts} attempts`));
      });
      
      // Race between the polling and the global timeout
      return await Promise.race([pollingPromise, timeoutPromise]);
    } catch (error) {
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      if ((error as TypeError).message?.includes('Network request failed')) {
        console.error('Network error checking run status: Please check your internet connection.');
      } else if (error instanceof Error) {
        console.error(`Error checking run status: ${error.message}`);
      } else {
        console.error('Error checking run status:', error);
      }
      
      // Rethrow the error to be handled by the calling function
      throw error;
    }
  }

  /**
   * Get messages from the thread
   */
  private async getThreadMessages(): Promise<ThreadMessage[]> {
    try {
      const response = await fetch(`https://api.openai.com/v1/threads/${this.threadId}/messages`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
        } else {
          throw new Error(`Failed to get messages: ${response.status}`);
        }
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      // Set flag to indicate we're using fallback mode
      this.useApiBackend = false;
      
      // Provide more specific error messages
      if ((error as TypeError).message?.includes('Network request failed')) {
        console.error('Network error getting thread messages: Please check your internet connection.');
      } else if (error instanceof Error) {
        console.error(`Error getting thread messages: ${error.message}`);
      } else {
        console.error('Error getting thread messages:', error);
      }
      
      // Rethrow the error to be handled by the calling function
      throw error;
    }
  }

  /**
   * Clear the conversation history and thread
   */
  async clearHistory(): Promise<void> {
    this.history = [{
      role: 'system',
      content: MENTAL_HEALTH_SYSTEM_PROMPT
    }];
    
    // Create a new thread
    this.threadId = null;
    await this.createThread();
  }

  /**
   * Get the current conversation history
   */
  getHistory(): OpenAIMessage[] {
    return [...this.history];
  }

  /**
   * Set the conversation history
   * @param history The conversation history to set
   */
  async setHistory(history: OpenAIMessage[]): Promise<void> {
    // Make sure we always have the system prompt
    const hasSystemPrompt = history.some(msg => msg.role === 'system');
    if (!hasSystemPrompt) {
      history.unshift({
        role: 'system',
        content: MENTAL_HEALTH_SYSTEM_PROMPT
      });
    }
    this.history = [...history];
    
    // Create a new thread
    this.threadId = null;
    await this.createThread();
    
    // Add all user and assistant messages to the thread
    for (const message of history) {
      if (message.role === 'user') {
        await this.addMessageToThread(message.content);
      }
    }
  }

  /**
   * Check if the service is currently using the API backend
   */
  isUsingApiBackend(): boolean {
    return this.useApiBackend && !this.quotaExceeded;
  }
  
  /**
   * Check if the Assistant ID exists and is valid
   * @returns A promise that resolves to true if the assistant exists, false otherwise
   */
  async checkAssistantId(): Promise<boolean> {
    try {
      const response = await fetch(`https://api.openai.com/v1/assistants/${this.assistantId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Assistant exists:', data.id);
        return true;
      } else {
        if (response.status === 404) {
          console.error(`Assistant ID ${this.assistantId} not found. Please check your Assistant ID in config.ts`);
        } else {
          console.error(`Error checking Assistant ID: ${response.status}`);
        }
        return false;
      }
    } catch (error) {
      console.error('Error checking Assistant ID:', error);
      return false;
    }
  }

  /**
   * Test connectivity to the OpenAI API
   * @returns A promise that resolves to true if connected, false otherwise
   */
  async testConnectivity(): Promise<boolean> {
    try {
      const response = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      });
      
      if (response.ok) {
        this.useApiBackend = true;
        return true;
      } else {
        try {
          const errorData = await response.json();
          if (response.status === 401) {
            console.error('Authentication failed: Invalid API key. Please check your OpenAI API key in config.ts');
          } else {
            console.error('API connectivity test failed:', errorData);
          }
        } catch (e) {
          console.error('Error parsing API response:', e);
        }
        return false;
      }
    } catch (error) {
      console.error('Error testing API connectivity:', error);
      return false;
    }
  }
  
  /**
   * Get a fallback response when the API is unavailable
   * @param message The user's message
   * @returns A suitable fallback response
   */
  private getFallbackResponse(message: string): string {
    // Common mental health-related responses
    const fallbackResponses = [
      "I'm here to listen and support you. Would you like to tell me more about how you're feeling?",
      "That sounds challenging. Remember that it's okay to take things one step at a time.",
      "I understand this might be difficult. Have you tried any relaxation techniques that have helped in the past?",
      "Thank you for sharing that with me. It takes courage to discuss these feelings.",
      "Deep breathing exercises can sometimes help in moments of stress. Would you like to try one together?",
      "It's important to be kind to yourself during difficult times. What's one small thing you could do today for self-care?",
      "Sometimes talking to a professional can provide additional support. Have you considered speaking with a counselor?",
      "Your feelings are valid. It's okay to acknowledge them without judgment.",
      "Remember that healing isn't linear - there may be ups and downs, and that's completely normal.",
      "Would it help to talk about some coping strategies that might work for your situation?",
    ];
    
    // Greeting responses for first messages
    const greetingResponses = [
      "Hello! I'm MentaMind, your mental health assistant. How are you feeling today?",
      "Hi there! I'm here to support you. How can I help you today?",
      "Welcome to MentaMind. I'm here to listen and provide support. How are you doing?",
      "Greetings! I'm your mental health assistant. How are you feeling at the moment?",
    ];
    
    // Check if this is a greeting
    const lowerMessage = message.toLowerCase();
    const greetingWords = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
    const isGreeting = greetingWords.some(word => lowerMessage.includes(word));
    
    // Get a random response from the appropriate array
    const responses = isGreeting ? greetingResponses : fallbackResponses;
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
  }
}

export default new OpenAIAssistantService();
