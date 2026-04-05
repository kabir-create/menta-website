import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Zap, Settings, BarChart2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    <Card className="text-center h-full shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-glass-border relative overflow-hidden">
      {/* Background pattern image specific to each benefit */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {title === "Increased Productivity" && (
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Productivity pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {title === "Reduced Burnout & Absenteeism" && (
          <img 
            src="https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Wellness pattern" 
            className="w-full h-full object-cover"
          />
        )}
        {title === "Enhanced Company Culture" && (
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Company culture pattern" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <CardHeader className="relative z-10">
        <motion.div 
          className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3 text-primary relative overflow-hidden"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
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
        <CardTitle className="text-xl text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-sm text-black/80">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ForOrganizationsPage = () => {
  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Workplace wellness" 
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588610.png" 
            alt="Workplace wellness icon" 
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588693.png" 
            alt="Organization wellness icon" 
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Briefcase size={48} className="mx-auto mb-4 text-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Mentamind for Organizations
          </motion.h1>
          <motion.p 
            className="text-xl text-black/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Empower your workforce with comprehensive mental well-being solutions designed to boost productivity, prevent burnout, and foster a supportive culture.
          </motion.p>
        </motion.div>
      </header>

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
          Why Invest in Employee Mental Health?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<TrendingUp size={28} />} 
            title="Increased Productivity" 
            description="Mentally healthy employees are more focused, engaged, and productive. Support their well-being to unlock their full potential."
          />
          <BenefitCard 
            icon={<Zap size={28} />} 
            title="Reduced Burnout & Absenteeism" 
            description="Proactive mental health support helps prevent burnout, reduces stress-related absenteeism, and improves overall employee retention."
          />
          <BenefitCard 
            icon={<BarChart2 size={28} />} 
            title="Enhanced Company Culture" 
            description="Show your employees you care. Investing in their mental health fosters a positive, supportive, and resilient workplace culture."
          />
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-md py-12 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
        {/* Background pattern image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Team solutions" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating mental health icons */}
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
          alt="Mental wellness team icon" 
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
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588697.png" 
          alt="Workplace support icon" 
          className="absolute bottom-10 left-10 w-12 h-12 opacity-10"
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
        
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions for Your Team
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity:0, x: -50 }} 
            whileInView={{ opacity:1, x: 0}} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-background rounded-lg shadow-md"
          >
            <Settings size={40} className="text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-black">White-Label Integration</h3>
              <p className="text-black/80">Seamlessly integrate Mentamind's platform into your existing corporate wellness programs with custom branding and tailored features to match your organization's identity.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity:0, x: 50 }} 
            whileInView={{ opacity:1, x: 0}} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-background rounded-lg shadow-md"
          >
            <BarChart2 size={40} className="text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-black">HR & Admin Dashboard</h3>
              <p className="text-black/80">Access an anonymized, aggregated dashboard providing insights into overall employee well-being trends, helping you make data-driven decisions to support your workforce effectively.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity:0, x: -50 }} 
            whileInView={{ opacity:1, x: 0}} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-background rounded-lg shadow-md"
          >
            <ShieldCheck size={40} className="text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-black">Confidential & Secure</h3>
              <p className="text-black/80">Employee privacy is guaranteed. Our platform uses ZKS and blockchain for secure, anonymous access to mental health resources, encouraging higher engagement.</p>
            </div>
          </motion.div>
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
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img  
              alt="Diverse group of professionals collaborating in a modern office" 
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-8 border border-white/50"
              src="https://images.unsplash.com/photo-1479800800845-03752b6188fa" 
            />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold mb-6 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Partner with Mentamind Today
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-black/80 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Let us help you build a resilient, thriving workforce. Contact our sales team to discuss your organization's needs and learn how Mentamind can make a difference.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 font-bold">
                <Link to="/get-started#contact-sales">Contact Sales</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 glass border-glass-border text-black hover:bg-secondary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] font-bold"
              >
                <Link to="https://mentamind-hr-pannel.vercel.app/">Corporate Solutions</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ForOrganizationsPage;