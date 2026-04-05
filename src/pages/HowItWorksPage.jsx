import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BarChart3, Video, BookOpen, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StepCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -5, scale: 1.01 }}
    className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-glass-border"
  >
    <motion.div 
      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 text-primary rounded-full flex items-center justify-center shadow-md"
    >
      {icon}
    </motion.div>
    <div>
      <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
      <p className="text-black/80 text-lg">{description}</p>
    </div>
  </motion.div>
);

const TechShowcaseCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.03 }} 
    transition={{ duration: 0.3 }}
  >
    <Card className="text-center hover:shadow-xl transition-all duration-300 h-full bg-white/90 backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden">
      <CardHeader>
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mx-auto bg-gradient-to-br from-secondary/20 to-primary/20 p-4 rounded-full w-20 h-20 mb-4 flex items-center justify-center shadow-inner"
        >
          {icon}
        </motion.div>
        <CardTitle className="text-xl font-bold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black/80">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const HowItWorksPage = () => {
  const steps = [
    { icon: <Bot size={36} />, title: "AI Chatbot Interaction", description: "Start by talking to our friendly AI chatbot. It's available 24/7 to listen, provide immediate support, and guide you through initial assessments using empathetic, NLP-driven conversations." },
    { icon: <BarChart3 size={36} />, title: "Symptom Tracking & Insights", description: "Log your moods, emotions, and symptoms. Our platform analyzes this data to provide personalized insights, identify patterns, and help you understand your mental state better over time." },
    { icon: <Video size={36} />, title: "Virtual Consultations (Optional)", description: "If needed, connect with certified psychologists and therapists for secure virtual sessions. Get professional guidance and personalized therapy plans tailored to your specific needs." },
    { icon: <BookOpen size={36} />, title: "Wellness Resources", description: "Access a rich library of guided meditations, journaling prompts, mindfulness exercises, and educational content designed to support your holistic well-being and personal growth." },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="text-center py-8 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health journey" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          
          {/* Animated gradient orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/10 to-magenta/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
          
          {/* Floating mental health icons */}
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/3588/3588614.png" 
            alt="Mental wellness icon" 
            className="absolute top-10 left-10 w-12 h-12 opacity-20"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/2821/2821739.png" 
            alt="Brain health icon" 
            className="absolute bottom-10 right-10 w-12 h-12 opacity-20"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How Mentamind Works
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A simple, secure, and personalized path to better mental well-being.
        </motion.p>
      </header>

      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background pattern image */}
          <img 
            src="https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health pattern" 
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
          
          <motion.div 
            className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
          
          {/* Floating mental health related images */}
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" 
            alt="Mental health support" 
            className="absolute top-1/4 right-20 w-16 h-16 opacity-20"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/2491/2491325.png" 
            alt="Mental wellness journey" 
            className="absolute bottom-1/4 left-20 w-16 h-16 opacity-20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 9, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 relative inline-block text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Your Journey with Mentamind</span>
          <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-light/50 -z-10 transform -rotate-1"></span>
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40 rounded-full transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full mb-8`}>
              <div className="md:w-5/12">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-primary-light/20 to-transparent md:mr-auto' : 'bg-gradient-to-br from-secondary-light/20 to-transparent md:ml-auto'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mr-5 shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-black/80 text-lg">{step.description}</p>
                </motion.div>
              </div>
              {/* Icon in the middle for desktop */}
              <div className="hidden md:flex md:w-2/12 justify-center">
                <div className="z-10 w-20 h-20 bg-white shadow-lg border-4 border-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary">
                  {step.icon}
                </div>
              </div>
              {/* Spacer for desktop */}
              <div className="md:w-5/12"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-sm py-16 rounded-2xl shadow-lg border border-glass-border">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 relative inline-block text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">The Technology Behind Your Care</span>
          <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-light/50 -z-10 transform -rotate-1"></span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-4">
          <TechShowcaseCard 
            icon={<Bot size={36} />} 
            title="Advanced NLP & CBT-based AI" 
            description="Our AI understands natural language and employs Cognitive Behavioral Therapy principles to offer meaningful interactions and support." 
          />
          <TechShowcaseCard 
            icon={<ShieldCheck size={36} />} 
            title="Secure Data Storage" 
            description="Your privacy is paramount. We use Zero-Knowledge Systems and blockchain for unparalleled data security and anonymity." 
          />
          <TechShowcaseCard 
            icon={<BarChart3 size={36} />} 
            title="Personalized Analytics" 
            description="Intelligent algorithms analyze your inputs to provide personalized feedback and track your progress effectively." 
          />
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;