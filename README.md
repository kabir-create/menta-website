<<<<<<< HEAD
# mentamind-website
=======
# MentaMind Website

MentaMind is a mental health support platform that offers instant, personalized emotional support, symptom tracking, virtual therapy, and holistic well-being resources. This repository contains the code for the MentaMind website.

## Features

- 24/7 AI-powered mental health support
- Personalized mental health journey
- Comprehensive well-being programs for individuals and organizations
- Data privacy and security

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- OpenAI Assistant API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mentamind-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in your OpenAI API key and Assistant ID

```bash
cp .env.example .env
```

Edit the `.env` file:
```
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_OPENAI_ASSISTANT_ID=your_assistant_id_here
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The website will be available at `http://localhost:5173`.

### Building for Production

Build the website for production:
```bash
npm run build
# or
yarn build
```

## OpenAI Assistant Integration

MentaMind uses OpenAI Assistant API for its AI chatbot functionality. The integration works as follows:

1. When the chatbot component mounts, it creates a new thread with the OpenAI API
2. When a user sends a message, it's added to the thread
3. The assistant processes the message and generates a response
4. The response is displayed in the chat interface

### Current Implementation Note

**Important:** The current implementation uses hardcoded API keys directly in the code for immediate functionality. This is a temporary solution and not recommended for production use. In a production environment, these values should be stored in environment variables.

### Configuration

To use your own OpenAI Assistant:

1. Create an Assistant in the OpenAI platform with appropriate instructions for mental health support
2. Get the Assistant ID and your OpenAI API key
3. For development purposes, you can directly update the values in `HomePage.jsx`
4. For production, implement proper environment variable handling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- OpenAI for providing the Assistant API
- All contributors to the MentaMind project
>>>>>>> a7d142277e917e12fe21cd4fa867644d4994a560
