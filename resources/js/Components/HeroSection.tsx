import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ArrowRight, Dumbbell, Apple, Heart, Activity, Target, Zap } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] bg-white overflow-hidden flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Pulse Animation representing heart rate/activity */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-px">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 bg-primary/20"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{
                                scaleX: [0, 1, 1],
                                opacity: [0, 1, 0],
                                x: ['0%', '50%', '100%']
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Progress Circles representing milestones */}
                <div className="absolute top-20 right-20 w-64 h-64">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/10"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/20"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 0.75 }}
                            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/30"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 0.5 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity }}
                        />
                    </svg>
                </div>

                {/* Strength Indicator */}
                <motion.div
                    className="absolute bottom-20 right-32 flex gap-2"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    {[1, 2, 3, 4, 5].map((level) => (
                        <div
                            key={level}
                            className={`w-1 h-${level * 8} rounded-full ${level <= 3 ? 'bg-primary/30' : 'bg-primary/10'
                                }`}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                            Your Journey Starts Here
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight"
                        >
                            <span className="block text-gray-900">Build Your Body.</span>
                            <span className="block mt-2 text-primary">Transform Your Life.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-600 max-w-xl"
                        >
                            Join our revolutionary fitness program that combines cutting-edge technology
                            with personalized coaching to help you achieve your fitness goals faster than ever.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group">
                                Get Started
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/10">
                                View Programs
                            </Button>
                        </motion.div>

                        {/* Meaningful Stats/Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            {[
                                {
                                    icon: Activity,
                                    title: 'Track Progress',
                                    desc: 'Real-time metrics',
                                    visual: (
                                        <motion.div
                                            className="absolute -right-2 -top-2 w-3 h-3 bg-primary/20 rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )
                                },
                                {
                                    icon: Target,
                                    title: 'Set Goals',
                                    desc: 'Achieve targets',
                                    visual: (
                                        <motion.div
                                            className="absolute -right-2 -top-2 w-4 h-4 border-2 border-primary/20 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )
                                },
                                {
                                    icon: Zap,
                                    title: 'Stay Motivated',
                                    desc: 'Daily coaching',
                                    visual: (
                                        <motion.div
                                            className="absolute -right-2 -top-2 w-3 h-3 bg-primary/20 rotate-45"
                                            animate={{ rotate: [45, 90, 45] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )
                                }
                            ].map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="relative w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                        {feature.visual}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{feature.title}</p>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual Column - Meaningful Data Visualization */}
                    <div className="relative lg:block hidden h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Progress Chart */}
                            <div className="relative w-full aspect-square">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    {[0, 1, 2].map((ring) => {
                                        const radius = 40 - ring * 10;
                                        const circumference = 2 * Math.PI * radius;

                                        return (
                                            <motion.circle
                                                key={ring}
                                                cx="50"
                                                cy="50"
                                                r={radius}
                                                fill="none"
                                                stroke={`hsl(215, ${50 + ring * 20}%, ${50 + ring * 10}%)`}
                                                strokeWidth="2"
                                                strokeDasharray={circumference}
                                                initial={{ strokeDashoffset: circumference }}
                                                animate={{
                                                    strokeDashoffset: [circumference, 0],
                                                    rotate: [0, 360]
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    delay: ring * 0.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className="origin-center"
                                            />
                                        );
                                    })}
                                </svg>

                                {/* Central Stats */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="relative h-32 w-48"
                                    >
                                        {[
                                            { icon: Dumbbell, label: "Strength", desc: "Build Power" },
                                            { icon: Activity, label: "Endurance", desc: "Boost Stamina" },
                                            { icon: Apple, label: "Nutrition", desc: "Fuel Growth" },
                                            { icon: Heart, label: "Health", desc: "Feel Better" },
                                            { icon: Target, label: "Goals", desc: "Track Progress" },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0 flex flex-col items-center justify-center"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{
                                                    opacity: [0, 1, 1, 0],
                                                    scale: [0.8, 1, 1, 0.8],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    delay: index * 4,
                                                    repeat: Infinity,
                                                    repeatDelay: 16, // 4 seconds x 4 other items
                                                }}
                                            >
                                                <motion.div
                                                    className="p-3 rounded-2xl bg-primary/10 mb-3"
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                    }}
                                                >
                                                    <item.icon className="h-8 w-8 text-primary" />
                                                </motion.div>
                                                <motion.p
                                                    className="text-2xl font-bold text-gray-900 mb-1"
                                                    animate={{
                                                        y: [0, -5, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                    }}
                                                >
                                                    {item.label}
                                                </motion.p>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;