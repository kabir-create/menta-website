import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BrainCircuit, ChevronDown } from 'lucide-react';
import logoImage from '@/assets/images/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features', label: 'Features' },
  { to: '/for-organizations', label: 'For Organizations' },
  { to: '/why-mentamind', label: 'Why Mentamind?' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog', label: 'Blog' },
  // { to: '/team', label: 'Team' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Enhanced link styles
  const activeLinkClass = "text-black font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-sapphire after:rounded-full after:scale-x-100 after:origin-left after:transition-transform after:duration-300";
  const inactiveLinkClass = "text-black/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary/40 after:to-sapphire/40 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { y: -10, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`glass ${scrolled ? 'shadow-lg border-b border-glass-border' : ''} sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 overflow-hidden`}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-sapphire/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-secondary/5 to-magenta/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <img 
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Mental health pattern" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.02] mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="shiny relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-sapphire p-1.5"
              >
              <img src={logoImage} alt="Mentamind" className="w-12 h-12 object-contain" />
              </motion.div>
              <span className="text-2xl font-bold text-black">Mentamind</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="default" 
                  className="rounded-full px-6 py-6 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
                >
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:hidden">
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-primary/10 relative z-50"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden glass pb-6 border-t border-glass-border overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-5 pt-5">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={mobileItemVariants}>
                  <NavLink
                    to={link.to}
                    onClick={toggleMenu}
                    className={({ isActive }) => `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} className="w-full px-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    variant="default" 
                    className="w-full rounded-full py-6 bg-gradient-to-r from-primary to-sapphire hover:opacity-90 transition-all duration-300 font-bold shadow-md text-black" 
                    onClick={toggleMenu}
                  >
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </motion.div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;