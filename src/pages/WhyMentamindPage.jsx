import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartHandshake, ShieldAlert, CheckCircle, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import img from '../assets/images/founder.jpeg';

const ComparisonPoint = ({ feature, mentamind, competitor1, competitor2, isHeader = false }) => (
  <div className={`grid grid-cols-4 gap-4 py-3 px-2 items-center ${isHeader ? 'font-semibold bg-primary/10 rounded-t-lg' : 'border-b border-border last:border-b-0 hover:bg-muted/50'}`}>
    <div className={`col-span-1 ${isHeader ? 'text-primary' : ''}`}>{feature}</div>
    <div className={`text-center ${isHeader ? 'text-green-600' : ''}`}>{mentamind}</div>
    <div className={`text-center ${isHeader ? 'text-gray-500' : ''}`}>{competitor1}</div>
    <div className={`text-center ${isHeader ? 'text-gray-500' : ''}`}>{competitor2}</div>
  </div>
);

const WhyMentamindPage = () => {
  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental wellness journey" 
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
          
          {/* Floating mental health icons */}
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/3588/3588693.png" 
            alt="Mental wellness icon" 
            className="absolute top-10 left-10 w-12 h-12 opacity-15"
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
            alt="Mental health support icon" 
            className="absolute bottom-10 right-10 w-12 h-12 opacity-15"
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
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Lightbulb size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Choose Mentamind?
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          Discover what makes Mentamind a unique and trusted partner in your mental wellness journey.
        </p>
      </header>

      {/* Founder's Story */}
      <section className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
        {/* Background pattern image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health journey" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating mental health icons */}
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588633.png" 
          alt="Mental wellness icon" 
          className="absolute top-10 right-10 w-12 h-12 opacity-10"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 relative z-10"
        >
          <motion.div 
            className="flex-shrink-0 relative"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-md -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <img  
              alt="Portrait of Mentamind founder" 
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white relative z-10"
              src={img}
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-3xl font-semibold mb-4 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The Heart Behind Mentamind
            </motion.h2>
            <motion.p 
              className="text-black/80 mb-3 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "Mentamind was born from a deeply personal understanding of the challenges many face in accessing timely and stigma-free mental health support. Our founder, Mr Ayush Kumar - CEO, envisioned a world where compassionate care is available to everyone, anytime, anywhere." 
            </motion.p>
            <motion.p 
              className="text-black/80 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              "Driven by this vision, we combined cutting-edge AI with a human-centric approach to create a platform that's not just technologically advanced, but also genuinely empathetic and supportive. Our mission is to empower individuals and organizations to prioritize mental well-being, fostering healthier, happier lives."
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Key Differentiators */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
        </div>
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Sets Us Apart
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="h-full text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              {/* Background image with low opacity */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Personalized care" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="relative">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <HeartHandshake size={40} className="mx-auto mb-3 text-primary relative z-10" />
                <CardTitle>Personalized, Stigma-Free Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We tailor support to your unique needs in a judgment-free environment, encouraging open and honest engagement with your mental health.</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="h-full text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              {/* Background image with low opacity */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Data privacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="relative">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <ShieldAlert size={40} className="mx-auto mb-3 text-primary relative z-10" />
                <CardTitle id="privacy">Unparalleled Data Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Utilizing Zero-Knowledge Systems (ZKS) and blockchain, we offer a level of data security and anonymity rarely seen in mental health platforms.</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Card className="h-full text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              {/* Background image with low opacity */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Holistic wellness" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="relative">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <Award size={40} className="mx-auto mb-3 text-primary relative z-10" />
                <CardTitle>Holistic Well-being Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Beyond just addressing symptoms, we provide resources for overall well-being, including guided meditations, journaling, and educational content.</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white/80 backdrop-blur-md py-12 rounded-xl shadow-lg border border-glass-border">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mentamind vs. Alternatives
        </motion.h2>
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-1 sm:p-6 rounded-lg shadow-md overflow-x-auto border border-glass-border">
          <div className="min-w-[600px]">
            <ComparisonPoint feature="Feature" mentamind="Mentamind" competitor1="Wysa (Example)" competitor2="InnerHour (Example)" isHeader />
            <ComparisonPoint feature="24/7 AI Chatbot" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1={<CheckCircle className="text-green-500 mx-auto" />} competitor2="Varies" />
            <ComparisonPoint feature="Certified Psychologist Sessions" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1="Limited/Add-on" competitor2={<CheckCircle className="text-green-500 mx-auto" />} />
            <ComparisonPoint feature="Blockchain + ZKS Privacy" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1="Standard Encryption" competitor2="Standard Encryption" />
            <ComparisonPoint feature="Mood & Symptom Tracking" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1={<CheckCircle className="text-green-500 mx-auto" />} competitor2={<CheckCircle className="text-green-500 mx-auto" />} />
            <ComparisonPoint feature="Org. Dashboard & White-Label" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1="Limited" competitor2="Varies" />
            <ComparisonPoint feature="Guided Meditations & Journaling" mentamind={<CheckCircle className="text-green-500 mx-auto" />} competitor1={<CheckCircle className="text-green-500 mx-auto" />} competitor2={<CheckCircle className="text-green-500 mx-auto" />} />
          </div>
          <p className="text-xs text-black/70 mt-4 text-center">Comparison is illustrative and based on publicly available information. Features may vary.</p>
        </div>
      </section>

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
            Ready to Experience the Mentamind Difference?
          </motion.h2>
          <motion.p 
            className="max-w-xl mx-auto text-black/80 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands who are taking control of their mental well-being with our compassionate, secure, and personalized platform.
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

export default WhyMentamindPage;