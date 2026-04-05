import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BrainCircuit, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';


const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast({
        title: "Subscribed! 🎉",
        description: "Thanks for joining our newsletter. Stay tuned for updates!",
      });
      e.target.reset();
    } else {
      toast({
        title: "Oops! 🙊",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-glass-border mt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background pattern image */}
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
          alt="Mental wellness pattern" 
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-sapphire/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/5 to-magenta/5 rounded-full blur-3xl"></div>
        
        {/* Floating mental health icons */}
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/2299/2299276.png" 
          alt="Mental wellness icon" 
          className="absolute top-10 right-[20%] w-10 h-10 opacity-10"
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
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588613.png" 
          alt="Support icon" 
          className="absolute bottom-10 left-[20%] w-10 h-10 opacity-10"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center space-x-2 mb-5 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="shiny relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-sapphire p-1.5"
              >
                <BrainCircuit size={28} className="text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold text-black">Mentamind</span>
            </Link>
            <p className="text-base text-black/80 mb-6">Your mind, our mission. 24/7 AI-powered mental health support.</p>
            <motion.div 
              whileHover={{ y: -3 }}
              className="flex items-center text-sm glass p-3 rounded-xl border-glass-border shadow-sm hover:shadow-md transition-all duration-300 shiny"
            >
              <ShieldCheck size={18} className="mr-2 text-emerald" />
              <span className="font-medium text-black">Data privacy with ZKS & Blockchain</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-sapphire rounded-full"
              ></motion.span>
            </p>
            <ul className="space-y-4">
              {[
                { to: "/how-it-works", label: "How It Works" },
                { to: "/features", label: "Features" },
                { to: "/blog", label: "Blog" },
                { to: "/lifestyle-program", label: "Lifestyle Program" },
                { to: "/mental-health", label: "Mental Health" },
                { to: "/mental-health-solutions", label: "Mental Health Solutions" },
                { to: "/shop", label: "Shop" },
                { to: "/about-us", label: "About Us" },
                { to: "/get-started#contact-sales", label: "Contact Us" }
              ].map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-black/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-gradient-to-r from-primary to-sapphire rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-semibold text-lg mb-6 relative inline-block">
              Legal
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-sapphire rounded-full"
              ></motion.span>
            </p>
            <ul className="space-y-4">
              {[
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-of-service", label: "Terms of Service" }
              ].map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-black/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-gradient-to-r from-primary to-sapphire rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-semibold text-lg mb-6 relative inline-block">
              Newsletter
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-sapphire rounded-full"
              ></motion.span>
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Label htmlFor="email-newsletter" className="sr-only">Email for newsletter</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email-newsletter" 
                  placeholder="Your email" 
                  className="glass rounded-lg border-glass-border focus:border-primary focus:ring-primary/20 pr-10" 
                />
                <Button 
                  type="submit" 
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0 rounded-md bg-gradient-to-r from-primary to-emerald hover:opacity-90 transition-all duration-300 shiny"
                >
                  <ArrowRight size={16} className="text-primary-foreground" />
                </Button>
              </div>
              <p className="text-xs text-black/80">Get updates on mental wellness tips and product news.</p>
            </form>
            
            <div className="flex space-x-3 mt-8">
              {[
                { icon: <Facebook size={18} />, href: "", color: "from-primary to-sapphire" },
                { icon: <Twitter size={18} />, href: "https://x.com/MentamindT40030", color: "from-sapphire to-emerald" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/mentamind_ai/", color: "from-magenta to-secondary" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/mentamind-ai/", color: "from-primary to-emerald" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2.5 rounded-full border-glass-border text-black/70 hover:text-primary-foreground transition-all duration-300 shadow-md overflow-hidden group"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${social.color} transition-opacity duration-300`}></div>
                  <div className="relative z-10">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-black/70 mt-16 pt-8 border-t border-glass-border"
        >
          <p className="flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-primary animate-pulse" /> by Mentamind Team {new Date().getFullYear()}
          </p>
          <p className="mt-2 max-w-lg mx-auto">This platform is for informational purposes and does not substitute professional medical advice.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;