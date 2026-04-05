import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart, Target, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import img from '../assets/images/founder.jpeg';

const TeamMember = ({ name, role, image, bio }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <motion.div 
      className="relative mx-auto mb-4 w-40 h-40"
      whileHover={{ scale: 1.05 }}
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
        src={image} 
        alt={name} 
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white relative z-10"
      />
    </motion.div>
    <h3 className="text-xl font-semibold text-black">{name}</h3>
    <p className="text-primary font-medium mb-2">{role}</p>
    <p className="text-black/70 text-sm">{bio}</p>
  </motion.div>
);

const Milestone = ({ year, title, description }) => (
  <div className="flex gap-4 md:gap-6">
    <div className="flex flex-col items-center">
      <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center">
        {year}
      </div>
      <div className="w-0.5 bg-primary/30 grow mt-2"></div>
    </div>
    <div className="pb-10">
      <h3 className="text-xl font-semibold text-black mb-1">{title}</h3>
      <p className="text-black/70">{description}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
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
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Users size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Mentamind
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          Meet the team behind Mentamind and learn about our mission to transform mental healthcare
        </p>
      </header>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Innovation journey" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-semibold text-black mb-6">Our Story</h2>
          <div className="space-y-4 text-black/80">
            <p>
              Mentamind was founded in 2022 with a clear vision: to make mental healthcare accessible, stigma-free, and personalized for everyone. Our founder, Ayush Kumar, experienced firsthand the challenges of accessing timely mental health support during a difficult period in his life.
            </p>
            <p>
              This personal journey sparked the idea for a platform that combines cutting-edge technology with human empathy to provide support when and where it's needed most. Starting with a small team of passionate mental health advocates and technology experts, Mentamind quickly grew into the comprehensive mental wellness platform it is today.
            </p>
            <p>
              What sets Mentamind apart is our unwavering commitment to privacy, accessibility, and evidence-based approaches. We believe that mental health support should be available to everyone, regardless of their location, schedule, or financial situation.
            </p>
            <p>
              Today, we serve thousands of individuals and partner with forward-thinking organizations to create mentally healthier communities. Our journey is just beginning, and we're excited to continue innovating and expanding our impact in the mental health space.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
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
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-10 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission, Vision & Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Target size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-black">Our Mission</h3>
                  <p className="text-black/80">
                    To democratize mental healthcare by providing accessible, personalized, and stigma-free support through innovative technology and human expertise.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Globe size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-black">Our Vision</h3>
                  <p className="text-black/80">
                    A world where everyone has the tools and support they need to thrive mentally and emotionally, leading to healthier individuals, organizations, and communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Heart size={40} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-black">Our Values</h3>
                  <ul className="text-black/80 space-y-2">
                    <li><span className="font-medium">Compassion:</span> We approach every interaction with empathy and understanding.</li>
                    <li><span className="font-medium">Privacy:</span> We uphold the highest standards of data security and user confidentiality.</li>
                    <li><span className="font-medium">Innovation:</span> We continuously evolve our platform to better serve our users' needs.</li>
                    <li><span className="font-medium">Inclusivity:</span> We design our services to be accessible to people from all walks of life.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <TeamMember 
            name="Ayush Kumar"
            role="Founder & CEO"
            image={img}
            bio="With a background in psychology and technology, Ayush founded Mentamind to bridge the gap in accessible mental healthcare."
          />
          <TeamMember 
            name="Dr. Priya Sharma"
            role="Chief Clinical Officer"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            bio="A licensed clinical psychologist with over 15 years of experience, Dr. Sharma oversees all therapeutic content and approaches."
          />
          <TeamMember 
            name="Rahul Verma"
            role="CTO"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            bio="A tech innovator specializing in AI and secure systems, Rahul leads our engineering team in developing our cutting-edge platform."
          />
          <TeamMember 
            name="Ananya Patel"
            role="Head of User Experience"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            bio="With a passion for accessible design, Ananya ensures our platform is intuitive and supportive for all users."
          />
          <TeamMember 
            name="Dr. Vikram Singh"
            role="Research Director"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            bio="A neuroscientist by training, Dr. Singh leads our research initiatives to ensure our approaches are evidence-based and effective."
          />
          <TeamMember 
            name="Meera Kapoor"
            role="Partnerships Director"
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            bio="Meera builds strategic relationships with organizations and healthcare providers to expand Mentamind's reach and impact."
          />
        </div>
      </section> */}

      {/* Our Journey Timeline */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Journey
        </motion.h2>
        
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 md:left-6 w-0.5 bg-primary/30 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Milestone 
              year="2022"
              title="The Beginning"
              description="Mentamind was founded with a mission to revolutionize mental healthcare accessibility. Our initial team of five passionate individuals began developing the core AI technology."
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Milestone 
              year="2023"
              title="Platform Launch"
              description="We launched our beta platform, offering AI-powered support and connecting users with licensed therapists. Our user base grew to over 5,000 within the first six months."
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Milestone 
              year="2023"
              title="First Corporate Partnership"
              description="Secured our first major corporate partnership, bringing Mentamind's services to employees of a Fortune 500 company and demonstrating the value of mental wellness in the workplace."
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Milestone 
              year="2024"
              title="Expansion & Innovation"
              description="Expanded our team to 25 members, introduced blockchain-based privacy features, and launched our mobile app. Reached a milestone of 20,000 active users."
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Milestone 
              year="2025"
              title="The Future"
              description="Looking ahead, we're developing new features, expanding globally, and continuing our mission to make mental healthcare accessible to all."
            />
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award size={40} className="mx-auto text-primary mb-4" />
            <h2 className="text-3xl font-semibold mb-6 text-black">Awards & Recognition</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-glass-border">
                <h3 className="font-semibold text-lg mb-2 text-black">Mental Health Innovation Award</h3>
                <p className="text-black/70">Recognized for our innovative approach to mental healthcare delivery, 2023</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-glass-border">
                <h3 className="font-semibold text-lg mb-2 text-black">Healthcare Tech Breakthrough</h3>
                <p className="text-black/70">Named "Best Mental Health Platform" for our user-centered design, 2024</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-glass-border">
                <h3 className="font-semibold text-lg mb-2 text-black">Privacy Excellence Award</h3>
                <p className="text-black/70">Recognized for our commitment to user data privacy and security, 2024</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-glass-border">
                <h3 className="font-semibold text-lg mb-2 text-black">Social Impact Recognition</h3>
                <p className="text-black/70">Honored for making mental healthcare more accessible to underserved communities, 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      {/* <section className="text-center py-10 relative">
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
            Join Our Mission
          </motion.h2>
          <motion.p 
            className="max-w-xl mx-auto text-black/80 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We're always looking for passionate individuals to join our team. Whether you're a mental health professional, a tech expert, or simply someone who believes in our mission, we'd love to hear from you.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 font-bold">
              <Link to="/team">View Career Opportunities</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section> */}
    </div>
  );
};

export default AboutUsPage;
