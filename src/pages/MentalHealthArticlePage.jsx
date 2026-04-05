import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Brain, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MentalHealthArticlePage = () => {
  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental wellness" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          
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
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heart size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Taking Care of Your Mental Health is Essential
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          Understanding the importance of mental well-being and how it impacts every aspect of your life.
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health journey" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative z-10"
        >
          <h2 className="text-2xl font-semibold text-black">The Foundation of Overall Well-being</h2>
          <p className="text-black/80">
            Mental health is not just the absence of mental disorders; it's a state of well-being where you can realize your potential, cope with normal life stresses, work productively, and contribute to your community. Just as physical health requires attention and care, so does your mental health.
          </p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">The Mind-Body Connection</h2>
          <p className="text-black/80">
            Research consistently shows that mental and physical health are deeply interconnected. Poor mental health can lead to increased risk of physical health problems like heart disease, stroke, and type 2 diabetes. Similarly, chronic physical conditions can increase the risk of developing mental health issues.
          </p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">Impact on Daily Life</h2>
          <p className="text-black/80">
            Your mental health affects how you think, feel, and act. It influences your perception of the world, your relationships with others, and your ability to handle stress, make choices, and reach your full potential. When your mental health suffers, every aspect of your life can be affected.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Brain className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Cognitive Function</h3>
                <p className="text-black/80">
                  Good mental health supports clear thinking, concentration, and decision-making abilities. It helps maintain cognitive functions as you age and enhances your learning capacity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Activity className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Emotional Resilience</h3>
                <p className="text-black/80">
                  Mental well-being builds your capacity to cope with life's challenges, recover from setbacks, and adapt to change. It helps you manage stress and maintain perspective during difficult times.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-semibold text-black mt-8">Breaking the Stigma</h2>
          <p className="text-black/80">
            Despite growing awareness, mental health stigma persists in many communities. This stigma can prevent people from seeking help, leading to unnecessary suffering. By prioritizing your mental health and speaking openly about it, you contribute to breaking down these barriers.
          </p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">Preventive Care Matters</h2>
          <p className="text-black/80">
            Just as we take preventive measures for physical health—like exercise and regular check-ups—we should adopt practices that support mental well-being before problems arise. Regular self-care, stress management, and mindfulness can help maintain mental health and prevent more serious issues.
          </p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">When to Seek Help</h2>
          <p className="text-black/80">
            It's important to recognize when you might need professional support. Persistent feelings of sadness or anxiety, significant changes in sleep or appetite, withdrawal from activities you once enjoyed, or thoughts of self-harm are all signs that it's time to reach out to a mental health professional.
          </p>
          
          <div className="mt-10 bg-primary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-black">How Mentamind Can Help</h3>
            <p className="text-black/80 mb-4">
              At Mentamind, we provide accessible, stigma-free mental health support through our innovative platform. Whether you're looking for preventive tools to maintain well-being or need support during challenging times, our combination of AI-powered assistance and human expertise is here for you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center md:text-left"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-2 font-medium">
                <Link to="/get-started">Start Your Mental Health Journey</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 relative">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Your Mental Health Journey Begins Today
          </motion.h2>
          <motion.p 
            className="max-w-xl mx-auto text-black/80 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Taking the first step toward better mental health is a sign of strength, not weakness. Let Mentamind support you every step of the way.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 font-bold">
              <Link to="/get-started">Get Started for Free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default MentalHealthArticlePage;
