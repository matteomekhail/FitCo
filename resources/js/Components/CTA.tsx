import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/60 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Content Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Gradient Card */}
              <div className="absolute inset-0 backdrop-blur-sm" />
              
              {/* Content */}
              <div className="relative px-6 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-32">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8"
                  >
                    Take The First Step
                  </motion.span>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                  >
                    <span className="block text-gray-900">Ready to Transform</span>
                    <span className="block text-primary mt-2">Your Life?</span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
                  >
                    Start your fitness journey today with personalized training programs, 
                    expert nutrition guidance, and dedicated support every step of the way.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
                    >
                      Start Your Journey
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="rounded-full border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Explore Programs
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;