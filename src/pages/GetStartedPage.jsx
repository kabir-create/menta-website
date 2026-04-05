import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Download, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Assuming Textarea component exists or will be created
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

// Placeholder for Textarea if not provided by shadcn/ui setup
const TextareaComponent = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    ref={ref}
    {...props}
  />
));
TextareaComponent.displayName = "Textarea";


const GetStartedPage = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e, formType) => {
    e.preventDefault();
    // Basic form data retrieval for demo.
    // In a real app, you'd collect all fields.
    const formData = new FormData(e.target);
    const email = formData.get('email');

    if (email) { // Basic validation
      toast({
        title: "Message Sent! 🚀",
        description: `Thanks for reaching out regarding ${formType}. We'll be in touch soon!`,
      });
      e.target.reset();
    } else {
      toast({
        title: "Oops! 🙊",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="space-y-16 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental wellness journey" 
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588603.png" 
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
          <UserPlus size={48} className="mx-auto mb-4 text-primary" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Started with Mentamind
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Begin your journey to better mental well-being or explore solutions for your organization.
        </motion.p>
      </header>

      {/* Signup & App Download Section */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Card className="shadow-xl bg-white/90 backdrop-blur-sm border border-glass-border relative overflow-hidden">
            {/* Background pattern image */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental wellness journey" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating mental health icon */}
            <motion.img 
              src="https://cdn-icons-png.flaticon.com/512/3588/3588693.png" 
              alt="Mental wellness icon" 
              className="absolute top-5 right-5 w-10 h-10 opacity-10"
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <CardHeader>
              <CardTitle className="text-2xl text-black">Create Your Free Account</CardTitle>
              <CardDescription className="text-black/80">Sign up to access our AI chatbot, symptom tracker, and initial wellness resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => handleFormSubmit(e, "Signup")} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input id="signup-email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" name="password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-md hover:shadow-lg transition-all duration-300 hover:bg-slate-200">Sign Up Now</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="bg-gradient-to-br from-skyBlue/80 to-lavender/80 text-primary-foreground p-8 rounded-xl shadow-xl text-center h-full flex flex-col justify-center border border-white/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern image */}
            <div className="absolute inset-0 -z-10 opacity-10 mix-blend-overlay">
              <img 
                src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital wellness" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating mental health icons */}
            <motion.img 
              src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
              alt="Mental wellness icon" 
              className="absolute top-5 left-5 w-10 h-10 opacity-20"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.img 
              src="https://cdn-icons-png.flaticon.com/512/3588/3588603.png" 
              alt="Mental health support icon" 
              className="absolute bottom-5 right-5 w-10 h-10 opacity-20"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Animated glow effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-3xl -z-5"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <Download size={48} className="mx-auto mb-6 relative z-10" />
            <h2 className="text-3xl font-bold mb-4 text-white relative z-10">Download Our App</h2>
            <p className="mb-8 text-lg relative z-10">
              Get the full Mentamind experience on the go. Available soon on iOS and Android.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto"
              >
                <Button variant="outline" className="bg-white text-primary hover:bg-softWhite w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                  Coming Soon to App Store
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto"
              >
                <Button variant="outline" className="bg-white text-primary hover:bg-softWhite w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                  Coming Soon to Google Play
                </Button>
              </motion.div>
            </div>
            <p className="mt-6 text-sm opacity-80">Sign up above to be notified when the app launches!</p>
          </Card>
        </motion.div>
      </section>

      {/* Contact Forms Section */}
      <section id="contact-sales" className="space-y-12 relative">
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
          className="text-3xl font-semibold text-center text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Sales/Investor Team */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Briefcase size={28} className="text-primary" />
                  <CardTitle className="text-2xl text-black">For Organizations & Investors</CardTitle>
                </div>
                <CardDescription className="text-black/80">Interested in our corporate solutions or investment opportunities? Let's talk.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleFormSubmit(e, "Organizations/Investors")} className="space-y-4">
                  <div>
                    <Label htmlFor="org-name">Your Name / Company Name</Label>
                    <Input id="org-name" name="name" placeholder="John Doe / Acme Corp" required />
                  </div>
                  <div>
                    <Label htmlFor="org-email">Email Address</Label>
                    <Input id="org-email" name="email" type="email" placeholder="contact@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="org-message">Message</Label>
                    <TextareaComponent id="org-message" name="message" placeholder="Tell us about your needs or inquiry..." required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-md hover:bg-slate-200 transition-all duration-300">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* General Contact */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Mail size={28} className="text-secondary" />
                  <CardTitle className="text-2xl text-black">General Inquiries</CardTitle>
                </div>
                <CardDescription className="text-black/80">Have other questions or need support? We're here to help.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleFormSubmit(e, "General Inquiries")} className="space-y-4">
                  <div>
                    <Label htmlFor="gen-name">Your Name</Label>
                    <Input id="gen-name" name="name" placeholder="Jane Smith" required />
                  </div>
                  <div>
                    <Label htmlFor="gen-email">Email Address</Label>
                    <Input id="gen-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="gen-subject">Subject</Label>
                    <Input id="gen-subject" name="subject" placeholder="Question about..." required />
                  </div>
                  <div>
                    <Label htmlFor="gen-message">Message</Label>
                    <TextareaComponent id="gen-message" name="message" placeholder="Your message..." required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-secondary to-magenta hover:opacity-90 text-black shadow-md hover:bg-slate-200 transition-all duration-300">Submit Question</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="space-y-12 relative overflow-hidden">
        {/* Background pattern image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Mental wellness journey" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating mental health icons */}
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588693.png" 
          alt="Mental wellness icon" 
          className="absolute top-20 right-10 w-16 h-16 opacity-10"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" 
          alt="Mental health support icon" 
          className="absolute bottom-20 left-10 w-16 h-16 opacity-10"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Getting Started is Easy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-glass-border relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Background image */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
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
            
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black relative z-10">Create Your Account</h3>
            <p className="text-black/80 relative z-10">Sign up for free to access our basic mental wellness tools and resources.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-glass-border relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Background image */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental wellness assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated glow effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full blur-3xl -z-5"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10">
              <span className="text-2xl font-bold text-secondary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black relative z-10">Complete Assessment</h3>
            <p className="text-black/80 relative z-10">Take our comprehensive mental wellness assessment to personalize your experience.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-glass-border relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Background image */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mental wellness journey" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated glow effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sapphire rounded-full blur-3xl -z-5"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <div className="bg-sapphire/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10">
              <span className="text-2xl font-bold text-sapphire">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black relative z-10">Begin Your Journey</h3>
            <p className="text-black/80 relative z-10">Access personalized resources, AI support, and track your progress toward better mental wellness.</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            className="bg-gradient-to-r from-primary to-sapphire hover:opacity-90 text-black shadow-lg hover:bg-slate-200 transition-all duration-300 px-8 py-6 rounded-full text-lg font-semibold mb-4"
            asChild
          >
            <a href="#contact-sales">Get Started Today</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default GetStartedPage;