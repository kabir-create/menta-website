import React, { useState, useRef, useEffect } from "react";
import OpenAIAssistantService from "../services/OpenAIAssistantService";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Users,
  ShieldCheck,
  Send,
  X,
  Minimize2,
  Bot,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import img from '../assets/images/icon.png';
const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="h-full"
  >
    <Card className="h-full text-center glass border-glass-border shadow-md hover:shadow-xl transition-all duration-300 ease-in-out rounded-2xl overflow-hidden relative group shiny">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <CardHeader>
        <motion.div
          className="mx-auto bg-gradient-to-br from-primary/40 to-secondary/40 p-4 rounded-full w-fit mb-5 shadow-inner relative overflow-hidden group-hover:shadow-lg"
          whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {React.cloneElement(icon, {
            className: "text-primary-foreground",
            size: 40,
          })}
        </motion.div>
        <CardTitle className="text-xl font-bold text-black mb-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black/80 group-hover:text-black transition-colors duration-300 font-medium">
          {description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

// Chatbot Component
const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI mental health companion. How can I support you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [serviceError, setServiceError] = useState(false);
  
  // Initialize OpenAI Assistant Service
  useEffect(() => {
    const initializeService = async () => {
      try {
        console.log("Testing OpenAI API connectivity...");
        const isConnected = await OpenAIAssistantService.testConnectivity();
        
        if (isConnected) {
          console.log("API connection successful");
          
          // Check if the Assistant ID is valid
          const isAssistantValid = await OpenAIAssistantService.checkAssistantId();
          if (!isAssistantValid) {
            console.error("Assistant ID is not valid");
            setServiceError(true);
          }
        } else {
          console.error("Failed to connect to OpenAI API");
          setServiceError(true);
        }
      } catch (error) {
        console.error("Error initializing OpenAI Assistant Service:", error);
        setServiceError(true);
      }
    };
    
    initializeService();
  }, []);

  // Track the timeout for loading indicator
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Thinking...');
  const loadingIntervalRef = useRef(null);

  // Function to update loading state
  const startLoadingAnimation = () => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
    }
    
    setLoadingProgress(0);
    setLoadingMessage('Thinking...');
    
    // Create a loading animation
    let progress = 0;
    loadingIntervalRef.current = setInterval(() => {
      progress += 1;
      setLoadingProgress(Math.min(progress, 100));
      
      // Update loading message based on progress
      if (progress > 80) {
        setLoadingMessage('Almost there...');
      } else if (progress > 50) {
        setLoadingMessage('Processing your message...');
      } else if (progress > 20) {
        setLoadingMessage('Thinking deeply...');
      }
      
      // Clear interval if it's taking too long
      if (progress >= 100) {
        clearInterval(loadingIntervalRef.current);
      }
    }, 300);
  };

  // Function to stop loading animation
  const stopLoadingAnimation = () => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) {
      return;
    }

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    startLoadingAnimation();

    try {
      // Send message using the OpenAI Assistant Service
      const assistantResponse = await OpenAIAssistantService.sendMessage(userMessage);
      
      // Add the response to the messages
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantResponse },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      
      // More specific error message based on the error
      let errorMessage = "I'm currently experiencing some technical difficulties. Please try again in a moment.";
      
      if (error.message?.includes('timeout')) {
        errorMessage = "It's taking longer than expected to process your message. The service might be experiencing high demand. Please try again shortly.";
      } else if (error.message?.includes('network')) {
        errorMessage = "I'm having trouble connecting to the server. Please check your internet connection and try again.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage
        },
      ]);
    } finally {
      setIsLoading(false);
      stopLoadingAnimation();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          height: isMinimized ? 60 : 500,
        }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <img src={img} alt="MentaBot" className="w-10 h-10" />
            </div>
            <div className="px-2">
              <h3 className="text-black font-semibold text-sm">MentaBot</h3>
              <p className="text-black/80 text-xs">
                AI Mental Health Companion
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        {!isMinimized && (
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <div
  className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden ${
    message.role === "user" ? "bg-gray-300" : "bg-white"
  }`}
  style={{ padding: 0 }}
>
  {message.role === "user" ? (
    <User size={12} className="text-black" />
  ) : (
    <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
      {/* <img 
        src="src/assets/images/icon.png" 
        alt="MentaBot" 
        className="w-full h-full object-cover rounded-full" 
      /> */}
    </div>
  )}
</div>

                  <div
                    className={`p-3 rounded-lg text-sm ${
                      message.role === "user"
                        ? "bg-primary text-black"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500">{loadingMessage}</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-300 ease-in-out" 
                          style={{ width: `${loadingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        {!isMinimized && (
          <div className="p-4 border-t border-gray-300">
            <div className="flex space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-primary text-black p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            {/* <p className="text-xs  text-gray-500 mt-2 text-center py-2">
              This AI companion provides support but isn't a substitute for professional therapy.
            </p> */}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Floating Chat Button
const FloatingChatButton = ({ onClick, isOpen }) => (
  <motion.button
    onClick={onClick}
    className="fixed bottom-6 right-6 w-16 h-16 bg-gray-300 rounded-full shadow-lg flex items-center justify-center z-40"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{
      rotate: isOpen ? 0 : [0, -10, 10, 0],
      y: isOpen ? 0 : [0, -5, 0],
    }}
    transition={{
      rotate: { duration: 2, repeat: Infinity, repeatDelay: 3 },
      y: { duration: 2, repeat: Infinity, repeatDelay: 1 },
    }}
  >
    <img src={img} alt="chat" />

    {/* Notification dot */}
    {/* <motion.div
      className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <span className="text-white text-xs font-bold">!</span>
    </motion.div> */}
  </motion.button>
);

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 rounded-3xl">
        {/* Background image and overlay */}
        <div className="absolute inset-0 -z-10">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Peaceful mind background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-background"></div>

          {/* Colorful orbs */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? "bg-gradient-to-r from-primary/40 to-teal/40"
                  : i % 4 === 1
                  ? "bg-gradient-to-r from-secondary/40 to-accent/40"
                  : i % 4 === 2
                  ? "bg-gradient-to-r from-amber/40 to-gold/40"
                  : "bg-gradient-to-r from-sapphire/40 to-emerald/40"
              } blur-3xl`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                scale: [1, Math.random() * 0.3 + 0.9, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 15 + 10,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-block p-2 px-6 bg-white/80 backdrop-blur-sm rounded-full border border-glass-border text-primary font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Reimagining Mental Health Support
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-black leading-tight"
            >
              Your Mind, <br className="hidden sm:block" />
              <span className="relative inline-block">
                Our Mission
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-3 bg-primary/30 -z-10 rounded-full"
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black leading-tight"
            >
              24/7 AI-Powered Mental Health Support
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="max-w-2xl mx-auto text-lg text-black/80 font-medium mb-12"
            >
              Mentamind offers instant, personalized emotional support, symptom
              tracking, virtual therapy, and holistic well-being resources.
              Experience stigma-free care, anytime, anywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full w-full sm:w-auto px-8 py-7 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] shiny"
                >
                  <Link to="/get-started">Try for Free</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsChatOpen(true)}
                  size="lg"
                  variant="outline"
                  className="rounded-full w-full sm:w-auto px-8 py-7 glass border-glass-border text-black hover:bg-secondary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
                >
                  Talk to AI Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-16 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-sapphire/20 to-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-secondary/20 to-magenta/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-gold/20 to-amber/20 rounded-full blur-3xl"></div>
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald/30 to-primary/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          {/* Mental health related subtle background image */}
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
            alt="Calm meditation background"
            className="absolute right-0 top-0 w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-5 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative z-10 text-black">
                How Mentamind Empowers You
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-sapphire/30 -z-10 transform -rotate-1 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              ></motion.span>
            </motion.h2>

            <motion.p
              className="max-w-3xl mx-auto text-black/80 text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Whether you're an individual seeking support or an organization
              prioritizing employee well-being, Mentamind provides accessible,
              confidential, and effective mental health solutions.
            </motion.p>
          </motion.div>

          {/* Feature cards with mental health images */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mb-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="AI mental health support"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-10 z-0"
              />
              <FeatureCard
                icon={<MessageSquare size={36} />}
                title="Instant AI Support"
                description="Get immediate, empathetic responses from our AI chatbot, trained in CBT techniques, available 24/7."
                delay={0.2}
              />
            </div>

            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1479494606/vector/mental-health-concept.jpg?s=612x612&w=0&k=20&c=frJSKdP-5fNTvhqHEuSFVB47wxMRH_y866ebJhuUTTU= "
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-10 z-0"
              />
              <FeatureCard
                icon={<Zap size={36} />}
                title="Personalized Journey"
                description="Track your mood, understand your symptoms, and access tailored resources designed for your unique needs."
                delay={0.4}
              />
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Mental health for everyone"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-10 z-0"
              />
              <FeatureCard
                icon={<Users size={36} />}
                title="For Everyone"
                description="Solutions for individuals and comprehensive well-being programs for organizations and HR teams."
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy Teaser */}
      <section className="py-16 glass rounded-2xl shadow-lg border-glass-border my-16 relative overflow-hidden">
        {/* Background pattern for privacy section */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Digital security pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="bg-gradient-to-r from-emerald/30 to-sapphire/30 p-5 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-md border border-glass-border relative overflow-hidden"
                whileHover={{ rotate: 10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Small icon background image */}
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Security background"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <ShieldCheck
                  size={48}
                  className="text-primary-foreground relative z-10"
                />
              </motion.div>
              <motion.h2
                className="text-3xl font-bold mb-5 text-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Your Privacy, Secured
              </motion.h2>
              <motion.p
                className="text-black/80 text-lg mb-8 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We believe mental health support should be completely private.
                Mentamind uses cutting-edge Zero-Knowledge Systems (ZKS) and
                blockchain technology to ensure your data remains confidential
                and secure.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 py-2 border-glass-border bg-white/80 backdrop-blur-sm text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
                >
                  <Link to="/why-mentamind#privacy">
                    Learn more about our security
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Data security and privacy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />

              {/* Floating security elements */}
              <motion.img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Mental health data protection"
                className="absolute -bottom-10 -left-10 w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Digital privacy"
                className="absolute -top-5 -right-5 w-24 h-24 object-cover rounded-full shadow-lg border-4 border-white"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA to explore more */}
      <section className="text-center py-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>

          {/* Mental health imagery */}
          <div className="absolute inset-0 flex justify-between items-center opacity-10">
            <img
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Mindfulness and mental wellness"
              className="h-full w-1/3 object-cover opacity-20"
            />
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Mental health support"
              className="h-full w-1/3 object-cover opacity-20"
            />
          </div>

          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/10 to-magenta/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-5 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative z-10 text-black">
              Ready to Start Your Journey?
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-sapphire/30 -z-10 transform -rotate-1 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            ></motion.span>
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-black/80 text-lg mb-10 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Explore our features, understand how it works, or get started with a
            free trial today.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
            >
              <Link to="/features">Discover More Features</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Individual and Organization Cards with Enhanced Imagery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="h-full relative overflow-hidden"
          >
            <Card className="bg-gradient-to-r from-primary to-sapphire p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between border-none overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>

              {/* Background pattern for individuals */}
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mental wellness pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
              />

              <div>
                <div className="relative">
                  <motion.img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Person using mental health app"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating elements */}
                  <motion.img
                    src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                    alt="Meditation element"
                    className="absolute -bottom-3 -right-3 w-20 h-20 object-cover rounded-full shadow-lg border-2 border-white"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>

                <motion.h3
                  className="text-2xl font-bold mb-4 text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  For Individuals
                </motion.h3>
                <motion.p
                  className="mb-8 text-black text-lg font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Take control of your mental well-being with personalized
                  support and tools.
                </motion.p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
                >
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="h-full relative overflow-hidden"
          >
            <Card className="bg-gradient-to-r from-secondary to-magenta p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between border-none overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>

              {/* Background pattern for organizations */}
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Organizational wellness pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
              />

              <div>
                <div className="relative">
                  <motion.img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Team collaboration"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating elements */}
                  <motion.img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                    alt="Workplace wellness"
                    className="absolute -bottom-3 -left-3 w-20 h-20 object-cover rounded-full shadow-lg border-2 border-white"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>

                <motion.h3
                  className="text-2xl font-bold mb-4 text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  For Organizations
                </motion.h3>
                <motion.p
                  className="mb-8 text-black text-lg font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Empower your team with comprehensive mental health solutions.
                </motion.p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Fixed Link component */}
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
                >
                  <Link to="/for-organizations">
                    Learn About Corporate Solutions
                  </Link>
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <FloatingChatButton
        onClick={() => setIsChatOpen(!isChatOpen)}
        isOpen={isChatOpen}
      />

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default HomePage;
