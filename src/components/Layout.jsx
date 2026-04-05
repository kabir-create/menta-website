import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-softWhite via-primary-light/20 to-secondary-light/20">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;