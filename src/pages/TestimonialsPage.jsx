import React from 'react';
import { motion } from 'framer-motion';
import { Star, BarChartBig, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const TestimonialCard = ({ name, role, story, imagePlaceholder, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, scale: 1.02 }}
  >
    <Card className="h-full bg-white/80 backdrop-blur-sm flex flex-col shadow-md hover:shadow-xl transition-all duration-300 border border-glass-border relative overflow-hidden">
      {/* Background pattern image */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Mental wellness journey" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated glow effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full blur-3xl -z-5"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Floating mental health icon */}
      <motion.img 
        src="https://cdn-icons-png.flaticon.com/512/3588/3588603.png" 
        alt="Mental wellness icon" 
        className="absolute top-2 right-2 w-8 h-8 opacity-10"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <CardHeader className="flex-row items-center space-x-4 relative z-10">
        <motion.div 
          className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-2xl text-white font-semibold border-2 border-white/50"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {imagePlaceholder}
        </motion.div>
        <div>
          <CardTitle className="text-xl text-black">{name}</CardTitle>
          <CardDescription className="text-black/80">{role}</CardDescription>
          <motion.div 
            className="flex mt-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow relative z-10">
        <p className="italic text-black/80">"{story}"</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ImpactStat = ({ value, label, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-glass-border relative overflow-hidden"
  >
    {/* Background pattern image */}
    <div className="absolute inset-0 -z-10 opacity-5">
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
        alt="Mental wellness support" 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Animated glow effect */}
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full blur-3xl -z-5"
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.05, 0.15, 0.05]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    />
    
    <motion.div 
      className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 relative z-10"
      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <motion.p 
      className="text-4xl font-bold text-primary mb-1 relative z-10"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {value}
    </motion.p>
    <p className="text-black/80 relative z-10">{label}</p>
  </motion.div>
);

const TestimonialsPage = () => {
  const testimonials = [
    { name: "Sarah L.", role: "Software Developer", story: "Mentamind's AI chatbot helped me navigate a really tough period of anxiety. Having someone to talk to 24/7, without judgment, was a game-changer. The symptom tracker also helped me understand my triggers.", imagePlaceholder: "SL" },
    { name: "John B.", role: "HR Manager", story: "We implemented Mentamind for our employees, and the feedback has been overwhelmingly positive. The anonymous dashboard gives us valuable insights, and our team appreciates the confidential support.", imagePlaceholder: "JB" },
    { name: "Maria P.", role: "Student", story: "The guided meditations and journaling prompts are fantastic. I feel more centered and less stressed since I started using Mentamind. It's like having a wellness coach in my pocket.", imagePlaceholder: "MP" },
    { name: "David K.", role: "Entrepreneur", story: "As a busy founder, stress is constant. Mentamind has provided practical tools to manage it. The sessions with a certified psychologist were incredibly helpful and convenient.", imagePlaceholder: "DK" },
  ];

  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental wellness community" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500/10 to-primary/10 rounded-full blur-3xl"
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
          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <Heart size={48} className="mx-auto mb-4 text-red-500" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Impact Stories & Testimonials
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hear from individuals and organizations who have experienced the positive impact of Mentamind.
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
          Voices of Our Community
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.15} />
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-sm py-12 rounded-xl shadow-lg border border-glass-border relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-skyBlue/10 to-lavender/10 rounded-full blur-3xl"
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
          Visualizing Our Impact
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ImpactStat value="85%" label="Reported Stress Reduction" icon={<BarChartBig size={32} />} delay={0.1} />
          <ImpactStat value="78%" label="Improved Mood & Well-being" icon={<Heart size={32} />} delay={0.2} />
          <ImpactStat value="92%" label="Positive User Satisfaction" icon={<Star size={32} />} delay={0.3} />
        </div>
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img  
              alt="Graph showing positive trend in user well-being over time" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-white/50"
              src="https://images.unsplash.com/photo-1543286386-2e659306cd6c" 
            />
          </motion.div>
          <p className="text-sm text-black/70 mt-2 italic">Data based on anonymized user feedback and platform analytics.</p>
        </motion.div>
      </section>

      <section className="text-center relative overflow-hidden py-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Meditation and mindfulness" 
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
          
          {/* Floating mental health icons */}
          <motion.img 
            src="https://cdn-icons-png.flaticon.com/512/3588/3588603.png" 
            alt="Mental wellness icon" 
            className="absolute top-10 left-10 w-16 h-16 opacity-10"
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
            alt="Mental health support icon" 
            className="absolute bottom-10 right-10 w-16 h-16 opacity-10"
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
        
        {/* Content with animated glow effect */}
        <div className="relative z-10">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl -z-5"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.h2 
            className="text-2xl font-semibold mb-6 text-black relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Share Your Story
          </motion.h2>
          <motion.p 
            className="text-black/80 mb-6 max-w-xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your experience can inspire others. If Mentamind has made a difference in your life or organization, we'd love to hear from you.
          </motion.p>
          {/* This would ideally link to a contact form or email */}
          <motion.button 
            className="bg-gradient-to-r from-primary to-secondary text-black px-6 py-3 rounded-lg shadow-md hover:shadow-lg border border-white/10 backdrop-blur-sm relative z-10"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact Us to Share
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;