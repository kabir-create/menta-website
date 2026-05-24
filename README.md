# 🧠 MentaMind Website

MentaMind is an AI-powered mental health and emotional wellness platform designed to provide users with instant emotional support, AI-guided conversations, mood tracking, wellness resources, and personalized mental health assistance.

The platform combines modern web technologies with artificial intelligence to create an accessible, interactive, and user-friendly digital mental wellness companion.

---

# 🌟 Features

## 🤖 AI Mental Health Assistant
- 24/7 AI-powered emotional support
- Intelligent conversational chatbot
- Personalized wellness interactions
- Real-time AI responses using OpenAI Assistant API

## 📊 Mood & Wellness Tracking
- Daily mood monitoring
- Emotional analytics dashboard
- Stress and anxiety tracking
- AI-generated wellness insights

## 🧘 Wellness Resources
- Meditation and mindfulness suggestions
- Self-care guidance
- Productivity and wellness techniques
- Personalized mental health recommendations

## 🏢 Organizational Wellness Support
- Employee mental wellness programs
- Team wellness initiatives
- Scalable support solutions

## 🎨 Modern UI/UX
- Fully responsive design
- Smooth animations with Framer Motion
- Mobile-friendly interface
- Clean and accessible layout

## 🔒 Security & Privacy
- Secure API integration
- Environment variable support
- Privacy-focused architecture

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Library |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| OpenAI Assistant API | AI Chatbot |
| JavaScript | Programming Language |

---

# 📂 Project Structure

```bash
mentamind-website/
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

# ⚙️ Prerequisites

Before starting, make sure you have the following installed:

- Node.js (v16 or higher recommended)
- npm or yarn
- Git

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mentamind-website.git
```

Move into the project folder:

```bash
cd mentamind-website
```

---

## 2️⃣ Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

---

# 🔐 Environment Variables Setup

Create a `.env` file in the root directory.

## Windows (CMD)

```bash
copy .env.example .env
```

## Linux / MacOS

```bash
cp .env.example .env
```

---

## Add Environment Variables

Open `.env` and add:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_OPENAI_ASSISTANT_ID=your_openai_assistant_id_here
```

---

# ▶️ Running the Project

## Start Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

---

# 🌐 Local Development URL

After running the server, open:

```bash
http://localhost:5173
```

---

# 🏗️ Build for Production

Generate optimized production files:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

---

# 👀 Preview Production Build

Using npm:

```bash
npm run preview
```

Using yarn:

```bash
yarn preview
```

---

# 🧹 Linting

Run ESLint:

```bash
npm run lint
```

---

# 🔄 Git Commands

## Initialize Git

```bash
git init
```

## Check Status

```bash
git status
```

## Add Files

```bash
git add .
```

## Commit Changes

```bash
git commit -m "Initial Commit"
```

## Add Remote Repository

```bash
git remote add origin https://github.com/your-username/mentamind-website.git
```

## Push Code

```bash
git push -u origin main
```

---

# 🤖 OpenAI Assistant API Integration

MentaMind uses the OpenAI Assistant API to power its AI chatbot system.

---

## 📌 Workflow

### 1️⃣ Create Thread
A new conversation thread is created when the chatbot initializes.

### 2️⃣ Send User Message
User messages are pushed into the thread.

### 3️⃣ Assistant Processing
The OpenAI Assistant processes the conversation.

### 4️⃣ Generate Response
The assistant generates an intelligent emotional support response.

### 5️⃣ Render Response
Responses are displayed in the chat UI.

---

# 🔒 Security Recommendations

⚠️ Never expose API keys publicly.

Recommended practices:

- Use `.env` files
- Add `.env` to `.gitignore`
- Use backend APIs for sensitive requests
- Implement authentication
- Add rate limiting

---

# 📦 Recommended VS Code Extensions

- ES7+ React/Redux Snippets
- Tailwind CSS IntelliSense
- Prettier
- ESLint
- GitLens

---

# 🧪 Example `.gitignore`

```gitignore
node_modules
dist
.env
.vscode
```

---

# 🎯 Future Enhancements

- User Authentication
- Backend Integration
- Database Support
- Voice AI Assistant
- AI Mood Analytics
- Personalized Recommendations
- Multi-language Support
- Dark/Light Theme
- Real-time Notifications

---

# 🤝 Contributing

Contributions are welcome!

## Steps

### Fork Repository

Click the **Fork** button on GitHub.

### Create Feature Branch

```bash
git checkout -b feature-name
```

### Make Changes & Commit

```bash
git add .
git commit -m "Added new feature"
```

### Push Changes

```bash
git push origin feature-name
```

### Create Pull Request

Open a Pull Request on GitHub.

---

# 🐛 Troubleshooting

## Node Modules Error

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

Windows:

```bash
rmdir /s /q node_modules
npm install
```

---

## Port Already in Use

Run on another port:

```bash
npm run dev -- --port 3000
```

---

# 📸 Screenshots

Add screenshots of:
- Homepage
- AI Chatbot
- Mood Dashboard
- Wellness Features

Example:

```md
![Homepage](./screenshots/home.png)
```

---

# 📄 License

This project is licensed under the MIT License.

---

# 🙌 Acknowledgements

Special thanks to:

- OpenAI
- React Team
- Vite
- Tailwind CSS
- Framer Motion
- Contributors and Supporters

---

# 💙 About MentaMind

MentaMind aims to make mental wellness support accessible, intelligent, and stigma-free using modern AI technology and human-centered design.

By combining AI-powered conversations with wellness-focused experiences, MentaMind helps users better understand and improve their emotional well-being.

---

# 👨‍💻 Author

Developed with ❤️ by the MentaMind Team

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

```bash
⭐ Star the Repository
```