import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const MemberCard = ({ name, title, bio, imagePlaceholder, linkedin, twitter, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="h-full"
  >
    <Card className="text-center h-full shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-glass-border relative overflow-hidden">
      {/* Background pattern with low opacity */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Mental health pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="relative z-10">
        <motion.div 
          className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-skyBlue to-lavender flex items-center justify-center text-5xl text-white font-semibold mb-4 shadow-md border-2 border-white/50 relative overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0"
            animate={{ 
              opacity: [0, 0.5, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
          <img alt={`Profile picture of ${name}`} className="w-full h-full rounded-full object-cover relative z-10" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        </motion.div>
        <CardTitle className="text-2xl text-black">{name}</CardTitle>
        <CardDescription className="text-primary font-medium">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-black/80 mb-4">{bio}</p>
        <div className="flex justify-center space-x-3">
          {linkedin && (
            <motion.a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/70 hover:text-primary"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {twitter && (
            <motion.a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/70 hover:text-primary"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Twitter size={20} />
            </motion.a>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const TeamPage = () => {
  const teamMembers = [
    { name: "Dr. Evelyn Reed", title: "Founder & CEO", bio: "Visionary leader with a PhD in Clinical Psychology and a passion for leveraging technology to democratize mental healthcare. Placeholder bio with focus on empathy and innovation.", imagePlaceholder: "ER", linkedin: "#", twitter: "#" },
    { name: "Mark Chen", title: "Chief Technology Officer", bio: "Expert in AI, machine learning, and blockchain technology. Dedicated to building secure and scalable platforms. Placeholder bio highlighting technical expertise.", imagePlaceholder: "MC", linkedin: "#", twitter: "#" },
    { name: "Aisha Khan", title: "Head of Product", bio: "User-centric product leader focused on creating intuitive and impactful experiences. Placeholder bio about design thinking and user empathy.", imagePlaceholder: "AK", linkedin: "#", twitter: "#" },
  ];

  const advisors = [
    { name: "Prof. Samuel Green", title: "AI Ethics Advisor", bio: "Renowned professor specializing in the ethical implications of AI in healthcare. Placeholder bio emphasizing responsible AI development.", imagePlaceholder: "SG", linkedin: "#" },
    { name: "Dr. Olivia Harris", title: "Clinical Advisory Lead", bio: "Experienced psychiatrist providing clinical oversight and guidance. Placeholder bio about evidence-based practices.", imagePlaceholder: "OH", linkedin: "#" },
    { name: "Ben Carter", title: "Business Strategy Advisor", bio: "Seasoned entrepreneur and strategist helping scale impactful ventures. Placeholder bio focusing on growth and market strategy.", imagePlaceholder: "BC", linkedin: "#" },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Team collaboration" 
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
            src="https://cdn-icons-png.flaticon.com/512/2491/2491324.png" 
            alt="Team collaboration icon" 
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
            alt="Mental wellness team icon" 
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
          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <Brain size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Team & Advisors
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Meet the passionate individuals dedicated to Mentamind's mission of accessible mental wellness.
        </motion.p>
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
          Core Team
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} {...member} delay={index * 0.15} />
          ))}
        </div>
      </section>

      {/* <section className="bg-white/80 backdrop-blur-sm py-12 rounded-xl shadow-lg border border-glass-border relative">
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
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Advisory Board
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advisors.map((advisor, index) => (
            <MemberCard key={index} {...advisor} delay={index * 0.15} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default TeamPage;