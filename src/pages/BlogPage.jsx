import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, UserCircle, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, date, author, category, imagePlaceholder, slug, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="h-full"
  >
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-glass-border relative">
      {/* Background pattern with low opacity */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Mental health pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="h-48 bg-gradient-to-br from-skyBlue to-lavender flex items-center justify-center relative overflow-hidden group">
        {/* Animated overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ 
            background: [
              'linear-gradient(to right, rgba(var(--primary-rgb), 0.3), rgba(var(--secondary-rgb), 0.3))',
              'linear-gradient(to right, rgba(var(--secondary-rgb), 0.3), rgba(var(--primary-rgb), 0.3))',
              'linear-gradient(to right, rgba(var(--primary-rgb), 0.3), rgba(var(--secondary-rgb), 0.3))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <img  
            alt={`Blog post illustration for ${title}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={category === "Mental Health" ? "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                 category === "AI in Healthcare" ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                 category === "Productivity" ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                 "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
        />
      </div>
      <CardHeader>
        <div className="flex items-center text-xs text-black/70 mb-2 space-x-2">
          <Tag size={14} /><span>{category}</span>
        </div>
        <CardTitle className="text-xl leading-tight text-black hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3 text-black/80">{description}</CardDescription>
      </CardContent>
      <CardFooter className="text-xs text-black/70 justify-between items-center border-t pt-4">
        <div className="flex items-center space-x-1">
          <UserCircle size={14} /><span>{author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <CalendarDays size={14} /><span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  </motion.div>
);

// Import blog data
import { blogPosts } from '@/data/blogData';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  useEffect(() => {
    // Initialize with all posts
    setFilteredPosts(blogPosts);
  }, []);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const results = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.description.toLowerCase().includes(query) || 
        post.category.toLowerCase().includes(query) || 
        post.author.toLowerCase().includes(query)
      );
      setFilteredPosts(results);
    }
  };
  
  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is already handled by the onChange event
  };

  return (
    <div className="space-y-12 py-8">
      <header className="text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background image with low opacity */}
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
            alt="Mental health resources" 
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
            src="https://cdn-icons-png.flaticon.com/512/3588/3588613.png" 
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
            src="https://cdn-icons-png.flaticon.com/512/2491/2491324.png" 
            alt="Knowledge sharing icon" 
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
        <motion.h1 
          className="text-4xl font-bold mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mentamind Blog & Resources
        </motion.h1>
        <motion.p 
          className="text-xl text-black/80 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Educational content on mental health, well-being, productivity, and AI in healthcare.
        </motion.p>
      </header>

      <section className="max-w-lg mx-auto">
        <motion.form 
          className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md border border-glass-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSearchSubmit}
        >
          <Input 
            type="search" 
            placeholder="Search articles..." 
            className="flex-grow border-none focus:ring-0 bg-transparent text-black placeholder:text-black/50" 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button type="submit" variant="ghost" size="icon" className="text-primary">
            <Search size={20} />
          </Button>
        </motion.form>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <BlogCard key={index} {...post} delay={index * 0.1} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-black/70">Try adjusting your search terms or browse all articles.</p>
            <Button 
              variant="outline" 
              className="mt-4 border-primary text-black hover:text-primary" 
              onClick={() => setSearchQuery('')}
            >
              View All Articles
            </Button>
          </div>
        )}
      </section>
      
      {filteredPosts.length > 0 && filteredPosts.length === blogPosts.length && (
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button variant="outline" className="border-primary text-black hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium">Load More Articles</Button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;