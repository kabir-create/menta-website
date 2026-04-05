import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-80" />
        
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
      <div className="max-w-3xl w-full text-center space-y-8 relative z-10">
        {/* Icon and Title */}
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-full inline-block">
              <AlertTriangle size={64} className="text-amber-500" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold mb-4 text-black"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            404 - Page Not Found
          </motion.h1>
          
          <motion.p 
            className="text-xl text-black/80 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
        </div>
        
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-black px-6 py-6 text-lg"
          >
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
