import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Lightbulb, MessageCircle, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const ResourceCard = ({ title, description, icon: Icon, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border border-border/50">
      <CardContent className="pt-6">
        <Icon size={32} className="text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-black/80 mb-4">{description}</p>
        <Button asChild variant="outline" className="mt-2">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const MentalHealthPage = () => {
  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental wellness" 
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
          <Brain size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mental Health Resources
        </motion.h1>
        <p className="text-xl text-black/80 max-w-3xl mx-auto">
          Comprehensive information and support for your mental well-being journey
        </p>
      </header>

      {/* Understanding Mental Health */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Understanding mental health" 
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
          <h2 className="text-3xl font-semibold text-black mb-6">Understanding Mental Health</h2>
          <div className="space-y-4 text-black/80">
            <p>
              Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act, and determines how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
            </p>
            <p>
              Just as physical health requires attention and care, so does mental health. Many factors contribute to mental health issues, including biological factors such as genetics or brain chemistry, life experiences such as trauma or abuse, and family history of mental health problems.
            </p>
            <p>
              At Mentamind, we believe in a holistic approach to mental health that addresses all these factors and provides comprehensive support for your well-being journey.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Common Mental Health Conditions */}
      <section className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Common Mental Health Conditions
        </motion.h2>
        
        <Tabs defaultValue="anxiety" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
            <TabsTrigger value="depression">Depression</TabsTrigger>
            <TabsTrigger value="stress">Stress</TabsTrigger>
            <TabsTrigger value="other">Other Conditions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="anxiety" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Anxiety Disorders</h3>
                <p className="text-black/80 mb-4">
                  Anxiety disorders involve more than temporary worry or fear. For a person with an anxiety disorder, the anxiety does not go away and can get worse over time. These feelings can interfere with daily activities such as job performance, schoolwork, and relationships.
                </p>
                <h4 className="text-xl font-medium mb-2">Common symptoms include:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80 mb-4">
                  <li>Feeling restless, wound-up, or on-edge</li>
                  <li>Being easily fatigued</li>
                  <li>Having difficulty concentrating</li>
                  <li>Experiencing irritability</li>
                  <li>Having muscle tension</li>
                  <li>Difficulty controlling feelings of worry</li>
                  <li>Sleep problems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Types of Anxiety Disorders:</h4>
                <ul className="space-y-3 text-black/80">
                  <li>
                    <span className="font-medium">Generalized Anxiety Disorder:</span> Persistent and excessive worry about various things.
                  </li>
                  <li>
                    <span className="font-medium">Panic Disorder:</span> Recurrent unexpected panic attacks and persistent concern about having more panic attacks.
                  </li>
                  <li>
                    <span className="font-medium">Social Anxiety Disorder:</span> Significant anxiety and discomfort about being embarrassed or looked down upon in social situations.
                  </li>
                  <li>
                    <span className="font-medium">Specific Phobias:</span> Marked fear or anxiety about a specific object or situation.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/mental-health-solutions">Explore Anxiety Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="depression" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Depression</h3>
                <p className="text-black/80 mb-4">
                  Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed.
                </p>
                <h4 className="text-xl font-medium mb-2">Common symptoms include:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80 mb-4">
                  <li>Feeling sad or having a depressed mood</li>
                  <li>Loss of interest or pleasure in activities once enjoyed</li>
                  <li>Changes in appetite and weight</li>
                  <li>Trouble sleeping or sleeping too much</li>
                  <li>Loss of energy or increased fatigue</li>
                  <li>Feeling worthless or guilty</li>
                  <li>Difficulty thinking, concentrating or making decisions</li>
                  <li>Thoughts of death or suicide</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Types of Depression:</h4>
                <ul className="space-y-3 text-black/80">
                  <li>
                    <span className="font-medium">Major Depression:</span> Severe symptoms that interfere with your ability to work, sleep, study, eat, and enjoy life.
                  </li>
                  <li>
                    <span className="font-medium">Persistent Depressive Disorder:</span> A depressed mood that lasts for at least two years.
                  </li>
                  <li>
                    <span className="font-medium">Seasonal Affective Disorder:</span> Depression that occurs during winter months when there is less natural sunlight.
                  </li>
                  <li>
                    <span className="font-medium">Postpartum Depression:</span> Depression that occurs after childbirth.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/mental-health-solutions">Explore Depression Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stress" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Stress</h3>
                <p className="text-black/80 mb-4">
                  Stress is your body's reaction to pressure from a certain situation or event. It can be a physical, mental, or emotional reaction. We all experience stress to some degree, but chronic stress can have serious health consequences.
                </p>
                <h4 className="text-xl font-medium mb-2">Common symptoms include:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80 mb-4">
                  <li>Headaches or dizziness</li>
                  <li>Muscle tension or pain</li>
                  <li>Stomach problems</li>
                  <li>Chest pain or rapid heartbeat</li>
                  <li>Insomnia</li>
                  <li>Frequent colds and infections</li>
                  <li>Feeling overwhelmed or irritable</li>
                  <li>Racing thoughts or constant worry</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Types of Stress:</h4>
                <ul className="space-y-3 text-black/80">
                  <li>
                    <span className="font-medium">Acute Stress:</span> Short-term stress that goes away quickly, often in response to a specific event.
                  </li>
                  <li>
                    <span className="font-medium">Episodic Acute Stress:</span> Frequent episodes of acute stress, often due to a chaotic lifestyle.
                  </li>
                  <li>
                    <span className="font-medium">Chronic Stress:</span> Long-term stress that persists over an extended period and can harm your health.
                  </li>
                  <li>
                    <span className="font-medium">Traumatic Stress:</span> Stress resulting from a traumatic event that may lead to post-traumatic stress disorder.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/mental-health-solutions">Explore Stress Management</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-glass-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Other Mental Health Conditions</h3>
                <p className="text-black/80 mb-4">
                  Mental health encompasses a wide range of conditions beyond anxiety and depression. Understanding these conditions can help in recognizing symptoms and seeking appropriate support.
                </p>
                <ul className="space-y-3 text-black/80">
                  <li>
                    <span className="font-medium">Bipolar Disorder:</span> Causes unusual shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks.
                  </li>
                  <li>
                    <span className="font-medium">Obsessive-Compulsive Disorder (OCD):</span> Characterized by unreasonable thoughts and fears that lead to repetitive behaviors.
                  </li>
                  <li>
                    <span className="font-medium">Post-Traumatic Stress Disorder (PTSD):</span> Develops in some people who have experienced a shocking, scary, or dangerous event.
                  </li>
                  <li>
                    <span className="font-medium">Eating Disorders:</span> Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and ability to function.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-black/80">
                  <li>
                    <span className="font-medium">Attention-Deficit/Hyperactivity Disorder (ADHD):</span> A brain disorder marked by an ongoing pattern of inattention and/or hyperactivity-impulsivity.
                  </li>
                  <li>
                    <span className="font-medium">Schizophrenia:</span> A chronic brain disorder that affects how a person thinks, feels, and behaves.
                  </li>
                  <li>
                    <span className="font-medium">Borderline Personality Disorder:</span> A mental health disorder that impacts the way you think and feel about yourself and others.
                  </li>
                  <li>
                    <span className="font-medium">Substance Use Disorders:</span> Conditions that occur when the recurrent use of alcohol and/or drugs causes clinically significant impairment.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/mental-health-solutions">Explore All Support Options</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Mental Health Resources */}
      <section className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-10 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Helpful Resources
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard 
            title="Self-Assessment Tools" 
            description="Take our confidential mental health screenings to gain insights into your well-being and identify potential areas of concern."
            icon={Shield}
            link="/mental-health-solutions"
          />
          <ResourceCard 
            title="Educational Articles" 
            description="Explore our library of expert-written articles covering various mental health topics, conditions, and wellness strategies."
            icon={Lightbulb}
            link="/why-taking-care-of-your-mental-health-is-essential"
          />
          <ResourceCard 
            title="Support Communities" 
            description="Connect with others who share similar experiences in our moderated online support communities."
            icon={Users}
            link="/mental-health-solutions"
          />
          <ResourceCard 
            title="Crisis Information" 
            description="Access immediate resources and contact information for crisis situations and emergency mental health support."
            icon={Heart}
            link="/mental-health-solutions"
          />
          <ResourceCard 
            title="Therapy Options" 
            description="Learn about different therapy approaches and how to find the right mental health professional for your needs."
            icon={MessageCircle}
            link="/mental-health-solutions"
          />
          <ResourceCard 
            title="Wellness Programs" 
            description="Discover our structured programs designed to support mental well-being through lifestyle changes and daily practices."
            icon={Brain}
            link="/lifestyle-program"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-glass-border text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Your Mental Health Journey Starts Here
        </motion.h2>
        <motion.p 
          className="text-xl text-black/80 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Whether you're seeking support for yourself or a loved one, Mentamind offers the tools, resources, and community to help you thrive.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
            <Link to="/get-started">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <Link to="/mental-health-solutions">Explore Solutions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthPage;
