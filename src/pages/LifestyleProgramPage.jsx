import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Heart, Brain, Utensils, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
    <CardContent className="pt-6">
      <Icon className="text-primary mb-4" size={32} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black/80">{description}</p>
    </CardContent>
  </Card>
);

const LifestyleProgramPage = () => {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Lifestyle wellness" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-sapphire/10 rounded-full blur-3xl"
            animate={{ 
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
          <Leaf size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mentamind Lifestyle Program
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          A holistic approach to mental wellness through daily lifestyle practices
        </p>
      </header>

      {/* Program Overview */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
        <h2 className="text-3xl font-semibold mb-6">Program Overview</h2>
        <p className="text-black/80 mb-6">
          The Mentamind Lifestyle Program is designed to help you integrate mental wellness practices into your daily routine. 
          Based on scientific research and proven techniques, this program addresses all aspects of your lifestyle that impact mental health.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <FeatureCard 
            icon={Brain}
            title="Mind Training"
            description="Daily meditation and mindfulness practices to strengthen attention and emotional regulation."
          />
          <FeatureCard 
            icon={Heart}
            title="Physical Wellness"
            description="Exercise routines designed to boost mood and reduce anxiety through regular movement."
          />
          <FeatureCard 
            icon={Utensils}
            title="Nutrition Guidance"
            description="Dietary recommendations that support brain health and emotional balance."
          />
          <FeatureCard 
            icon={Moon}
            title="Sleep Optimization"
            description="Techniques to improve sleep quality for better cognitive function and mood stability."
          />
          <FeatureCard 
            icon={Clock}
            title="Habit Formation"
            description="Structured approach to building sustainable mental wellness habits that last."
          />
        </div>
      </section>

      {/* Program Benefits */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Program Benefits</h2>
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Reduced Stress and Anxiety</h3>
                <p className="text-black/80">Learn techniques to manage stress effectively and reduce anxiety in daily life.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Improved Mood</h3>
                <p className="text-black/80">Experience greater emotional stability and more positive daily outlook.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Enhanced Focus</h3>
                <p className="text-black/80">Develop stronger attention skills and mental clarity for better productivity.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Better Sleep Quality</h3>
                <p className="text-black/80">Enjoy more restful sleep and wake up feeling refreshed and energized.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Program Structure */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
        <h2 className="text-3xl font-semibold mb-6">Program Structure</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">8-Week Guided Journey</h3>
            <p className="text-black/80">
              Our program is structured as an 8-week journey with clear milestones and progressive skill development.
              Each week builds on the previous one, helping you establish sustainable habits.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
            <p className="text-black/80">
              The program adapts to your specific needs and goals through our AI-powered assessment and recommendation system.
              You'll receive customized practices based on your progress and feedback.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-black/80">
              Access to weekly group coaching sessions with mental health professionals and wellness experts
              who can answer questions and provide guidance on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Program Options</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-black px-4 py-1 rounded-bl-lg font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Individual Program</h3>
            <p className="text-3xl font-bold mb-6">₹4,999</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Full 8-week program access
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Personalized recommendations
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Weekly group coaching sessions
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Mobile app access
              </li>
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-black">
              Enroll Now
            </Button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
            <h3 className="text-2xl font-bold mb-2">Family Program</h3>
            <p className="text-3xl font-bold mb-6">₹8,999</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Access for up to 4 family members
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Family activity recommendations
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Private family coaching session
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                All individual program features
              </li>
            </ul>
            <Button className="w-full">
              Enroll Family
            </Button>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="text-center py-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lifestyle?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands who have improved their mental well-being through our structured lifestyle program.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg rounded-full px-8 py-6 font-bold">
            <Link to="/get-started">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LifestyleProgramPage;
