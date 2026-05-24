import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, UserCircle, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import blog data
import { blogPosts } from '@/data/blogData';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching the blog post data
    const fetchPost = () => {
      setLoading(true);
      // Find the post with the matching slug
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  // ui code begin 
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to all articles
        </Link>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img 
            src={post.imageUrl || (
              post.category === "Mental Health" ? "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
              post.category === "AI in Healthcare" ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
              post.category === "Productivity" ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
              "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            )} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center text-xs mb-2 space-x-2">
                <Tag size={14} className="text-white/80" />
                <span className="text-white/80">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-black/70 mb-8 border-b pb-4">
          <div className="flex items-center space-x-2">
            <UserCircle size={18} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDays size={18} />
            <span>{post.date}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <>
              <p className="lead">{post.description}</p>
              
              <p>Mental health is a crucial aspect of overall well-being that affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
              
              <h2>Why Mental Health Matters</h2>
              <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
              
              <p>Many factors contribute to mental health problems, including:</p>
              <ul>
                <li>Biological factors, such as genes or brain chemistry</li>
                <li>Life experiences, such as trauma or abuse</li>
                <li>Family history of mental health problems</li>
              </ul>
              
              <h2>The Role of Technology in Mental Health</h2>
              <p>Technology has transformed how we approach mental health care. From teletherapy platforms to mental health apps, digital tools are making support more accessible than ever before. AI-powered solutions can now provide personalized recommendations and track progress over time.</p>
              
              <p>At Mentamind, we believe in harnessing the power of technology to create meaningful mental health solutions that are accessible to everyone. Our platform combines cutting-edge AI with evidence-based therapeutic approaches to provide personalized support when you need it most.</p>
              
              <h2>Looking Forward</h2>
              <p>As we continue to advance our understanding of mental health and develop new technologies to support well-being, it's important to remember that seeking help is a sign of strength, not weakness. Whether you're dealing with everyday stress or more serious mental health concerns, resources are available to help you on your journey to better mental health.</p>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => relatedPost.slug !== slug && relatedPost.category === post.category)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <Link to={`/blog/${relatedPost.slug}`} className="block">
                    <div className="h-40 bg-gradient-to-br from-skyBlue to-lavender">
                      <img
                        src={relatedPost.category === "Mental Health" ? "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                             relatedPost.category === "AI in Healthcare" ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                             relatedPost.category === "Productivity" ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                             "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-black hover:text-primary transition-colors">{relatedPost.title}</h4>
                      <p className="text-sm text-black/70 mt-2 line-clamp-2">{relatedPost.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetailPage;
