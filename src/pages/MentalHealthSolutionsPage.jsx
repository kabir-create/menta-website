import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, MessageCircle, Users, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const SolutionCard = ({ title, description, icon: Icon, buttonText, link }) => (
  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
    <CardContent className="pt-6">
      <Icon className="text-primary mb-4" size={32} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black/80 mb-4">{description}</p>
      <Button asChild variant="outline" className="mt-2">
        <Link to={link}>{buttonText}</Link>
      </Button>
    </CardContent>
  </Card>
);

const MentalHealthSolutionsPage = () => {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health solutions" 
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
          <Sparkles size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mental Health Solutions
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          Effective approaches to support your mental well-being journey
        </p>
      </header>

      {/* Solutions Overview */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
        <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
        <p className="text-black/80 mb-6">
          At Mentamind, we believe in a comprehensive approach to mental health that combines evidence-based practices, 
          technology, and personalized support. Our solutions are designed to meet you where you are in your mental health journey 
          and provide the tools and resources you need to thrive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <Brain className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Science-Backed</h3>
              <p className="text-black/80">All our solutions are based on the latest research in psychology and neuroscience.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <Users className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Personalized</h3>
              <p className="text-black/80">Tailored recommendations based on your unique needs and preferences.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <Heart className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Holistic</h3>
              <p className="text-black/80">Addressing all aspects of well-being: mental, emotional, physical, and social.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <Zap className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Accessible</h3>
              <p className="text-black/80">Available whenever and wherever you need support, through multiple channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Solutions</h2>
        
        <Tabs defaultValue="self-help" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="self-help">Self-Help</TabsTrigger>
            <TabsTrigger value="therapy">Therapy</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="self-help" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Self-Help Tools</h3>
                <p className="text-black/80 mb-4">
                  Our self-help tools are designed to empower you with practical strategies and resources 
                  that you can use independently to support your mental well-being.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Guided Meditations</h4>
                      <p className="text-black/80">Audio sessions for stress reduction, focus, and emotional balance.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mood Tracking</h4>
                      <p className="text-black/80">Tools to monitor your emotional patterns and identify triggers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Journaling Prompts</h4>
                      <p className="text-black/80">Guided reflection exercises to process emotions and gain insights.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Self-help tools" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to="/shop">Explore Self-Help Tools</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="therapy" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Therapy Options</h3>
                <p className="text-black/80 mb-4">
                  Professional support from licensed therapists and counselors, available in multiple formats 
                  to suit your preferences and needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Online Therapy</h4>
                      <p className="text-black/80">Secure video sessions with licensed therapists from the comfort of your home.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Text-Based Counseling</h4>
                      <p className="text-black/80">Ongoing support through secure messaging with a dedicated counselor.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Group Therapy</h4>
                      <p className="text-black/80">Facilitated sessions with others experiencing similar challenges.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Therapy options" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to="/get-started">Find Your Therapist</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="programs" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Structured Programs</h3>
                <p className="text-black/80 mb-4">
                  Our evidence-based programs provide a structured approach to addressing specific mental health 
                  concerns and building resilience through guided practice and education.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Anxiety Management</h4>
                      <p className="text-black/80">8-week program to reduce anxiety through cognitive-behavioral techniques.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Depression Recovery</h4>
                      <p className="text-black/80">Comprehensive approach to lifting mood and rebuilding motivation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lifestyle Program</h4>
                      <p className="text-black/80">Holistic approach integrating mental wellness into daily routines.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Structured programs" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to="/lifestyle-program">Explore Programs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
                <p className="text-black/80 mb-4">
                  Connect with others who understand what you're going through in our supportive communities, 
                  facilitated by mental health professionals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Support Groups</h4>
                      <p className="text-black/80">Topic-specific groups for shared experiences and mutual support.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Online Forums</h4>
                      <p className="text-black/80">Moderated discussion spaces for sharing insights and asking questions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Peer Mentorship</h4>
                      <p className="text-black/80">Connect with trained peers who have navigated similar challenges.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Community support" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to="/community">Join Our Community</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Featured Solutions */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard 
            title="AI Mental Health Assistant" 
            description="24/7 support through our AI-powered assistant that provides coping strategies, resources, and guided exercises."
            icon={Brain}
            buttonText="Try Now"
            link="/get-started"
          />
          
          <SolutionCard 
            title="Personalized Wellness Plan" 
            description="Receive a customized mental wellness plan based on your needs, preferences, and goals."
            icon={Heart}
            buttonText="Get Your Plan"
            link="/get-started"
          />
          
          <SolutionCard 
            title="Crisis Support" 
            description="Immediate access to crisis resources and professional support when you need it most."
            icon={Zap}
            buttonText="Access Support"
            link="/get-started"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-glass-border">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-primary/20 rounded-full p-4 flex-shrink-0">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-black/80">
                Complete our comprehensive mental health assessment to help us understand your unique needs and challenges.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-primary/20 rounded-full p-4 flex-shrink-0">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-black/80">
                Receive tailored suggestions for tools, resources, and support options based on your assessment results.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-primary/20 rounded-full p-4 flex-shrink-0">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-black/80">
                Access your chosen solutions and track your progress with regular check-ins and adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Begin Your Mental Health Journey Today</h2>
          <p className="text-xl text-black/80 mb-8">
            Take the first step toward better mental well-being with our personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg rounded-full px-8 py-6 font-bold">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6">
              <Link to="/mental-health">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthSolutionsPage;
