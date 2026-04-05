import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CalendarClock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ShopPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
          alt="Shop background" 
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
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-l from-primary/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-12 relative z-10">
        {/* Icon and Title */}
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-full inline-block">
              <ShoppingBag size={64} className="text-primary" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold mb-4 text-black"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Shop is Coming Soon
          </motion.h1>
          
          <motion.p 
            className="text-xl text-black/80 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We're working hard to bring you a curated collection of mental wellness products.
            Stay tuned for our launch!
          </motion.p>
        </div>
        
        {/* Countdown or Launch Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap- flex-wrap"
        >
          <div className="bg-white/50 backdrop-blur-sm p-5 rounded-xl flex items-center gap-3 border border-border/30">
            <CalendarClock size={24} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-black/70">Estimated Launch</p>
              <p className="font-semibold text-black">Coming Feb 2026</p>
            </div>
          </div>
        </motion.div>
        
        {/* Newsletter Section */}
        {/* <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black">Get Notified When We Launch</h2>
            <p className="text-black/80 mb-6">
              Be the first to know when our shop opens and receive exclusive early-access offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto ">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40" size={18} />
                <Input placeholder="Your email address" className="bg-white border-border/50 pl-10" />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-black">
                Notify Me
              </Button>
            </div>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
};

export default ShopPage;
