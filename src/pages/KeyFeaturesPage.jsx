import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, UserCheck, BarChartHorizontalBig, Headphones, ShieldCheck as ShieldLock, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const FeatureItem = ({ icon, title, description, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="h-full"
  >
    <Card className="h-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl border border-glass-border transition-all duration-300 ease-in-out relative overflow-hidden">
      {/* Background pattern image specific to each feature */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {id === 'chatbot' && (
          <img 
            src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Communication pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {id === 'sessions' && (
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Therapy session pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {id === 'tracker' && (
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Data tracking pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {id === 'meditations' && (
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Meditation pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {id === 'privacy' && (
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Security pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {id === 'organizations' && (
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Organization pattern" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <CardHeader className="items-center text-center relative z-10">
        <motion.div 
          className="p-4 bg-primary/10 rounded-full mb-4 text-primary w-fit relative overflow-hidden group"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background for icon */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              background: [
                'radial-gradient(circle at 20% 20%, rgba(var(--primary-rgb), 0.2), transparent 70%)',
                'radial-gradient(circle at 80% 80%, rgba(var(--secondary-rgb), 0.2), transparent 70%)',
                'radial-gradient(circle at 20% 20%, rgba(var(--primary-rgb), 0.2), transparent 70%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="relative z-10">{icon}</div>
        </motion.div>
        <CardTitle className="text-2xl text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-center text-base text-black/80">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const KeyFeaturesPage = () => {
  const features = [
    { id: 'chatbot', icon: <MessageCircle size={40} />, title: "AI-Powered Chatbot", description: "Available 24/7 for instant emotional support, empathetic conversations, and guided self-help exercises. Uses NLP and CBT-based AI." },
    { id: 'sessions', icon: <UserCheck size={40} />, title: "Certified Psychologist Sessions", description: "Connect with licensed therapists and psychologists for confidential virtual consultations and personalized treatment plans." },
    { id: 'tracker', icon: <BarChartHorizontalBig size={40} />, title: "Mood & Symptom Tracker", description: "Log your emotions, symptoms, and daily activities to gain insights into your mental health patterns and track progress over time." },
    { id: 'meditations', icon: <Headphones size={40} />, title: "Guided Meditations & Journaling", description: "Access a vast library of guided meditations, mindfulness exercises, and structured journaling prompts to foster relaxation and self-reflection." },
    { id: 'privacy', icon: <ShieldLock size={40} />, title: "Data Privacy with Blockchain + ZKS", description: "Uncompromising security using Zero-Knowledge Systems and blockchain technology ensures your personal data remains anonymous and protected." },
    { id: 'organizations', icon: <Briefcase size={40} />, title: "Dashboard for Organizations & HR", description: "Tools for businesses to support employee well-being, monitor anonymous aggregated data for trends, and promote a healthy work environment." },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
        </div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Core Features of Mentamind
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover the tools and support systems designed to empower your mental wellness journey.
        </motion.p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} id={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg text-center border border-glass-border relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <motion.h2 
                className="text-3xl font-semibold mb-6 text-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Experience the Difference
            </motion.h2>
            <motion.p 
                className="text-lg text-black/80 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Mentamind integrates cutting-edge technology with compassionate care to provide a mental health solution that's accessible, affordable, and truly personalized. We're committed to helping you thrive.
            </motion.p>
            <motion.div 
                className="flex items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-glass-border"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <img  
                    alt="Interactive chatbot preview on a smartphone screen" 
                    className="w-full max-w-md rounded-lg shadow-2xl border border-white/50"
                    src="https://images.unsplash.com/photo-1675023035272-3426884896f8" 
                />
            </motion.div>
            <motion.p 
                className="mt-4 text-sm text-black/70 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                Interactive chatbot preview coming soon!
            </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default KeyFeaturesPage;