import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ChevronRight, Dumbbell, Apple, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] overflow-hidden shadow-lg">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/Homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Body, <br />
          <span className="text-white">
            Elevate Your Life
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-center mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join FitCo for personalized training and nutrition plans that will revolutionize your fitness journey.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-white text-[#0197F6] hover:bg-opacity-90 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
            Start Your Journey <ChevronRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0197F6] transition duration-300">
            Learn More
          </Button>
        </motion.div>

        {/* Feature icons */}
        <motion.div 
          className="flex justify-center items-center space-x-12 sm:space-x-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <Dumbbell size={32} className="text-white mb-2" />
            <p className="text-sm text-white font-medium">Expert Training</p>
          </div>
          <div className="flex flex-col items-center">
            <Apple size={32} className="text-white mb-2" />
            <p className="text-sm text-white font-medium">Nutrition Plans</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart size={32} className="text-white mb-2" />
            <p className="text-sm text-white font-medium">Holistic Wellness</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;