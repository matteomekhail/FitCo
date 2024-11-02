import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ArrowRight, Dumbbell, Apple, Heart, Activity, Target, Zap } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] bg-white overflow-hidden flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                {/* Overlay più complesso per migliore contrasto */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/65 to-black/80" /> {/* Overlay principale */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40" /> {/* Vignettatura laterale */}

                <video
                    className="w-full h-full object-cover scale-105" // Leggero zoom per evitare bordi bianchi
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/video/Homepage.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Geometric Background con opacità ridotta */}
            <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                {/* Gli altri elementi di background con opacità ridotta */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-px opacity-30">
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

                {/* Altri elementi di background... */}
            </div>

            {/* Main Content con testo in bianco */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm"
                        >
                            Your Journey Starts Here
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight"
                        >
                            <span className="block text-white">Build Your Body.</span>
                            <span className="block mt-2 text-primary-foreground">Transform Your Life.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-white/90 max-w-xl"
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
    <Button 
        size="lg" 
        className="bg-white hover:bg-white/90 text-black font-semibold rounded-full px-8 group shadow-lg"
    >
        Get Started
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
    <Button 
        size="lg" 
        variant="outline" 
        className="rounded-full border-2 border-white bg-black/30 text-white hover:bg-white hover:text-black transition-colors shadow-lg backdrop-blur-sm"
    >
        View Programs
    </Button>
</motion.div>

                        {/* Features Grid */}
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
                                },
                                {
                                    icon: Target,
                                    title: 'Set Goals',
                                    desc: 'Achieve targets',
                                },
                                {
                                    icon: Zap,
                                    title: 'Stay Motivated',
                                    desc: 'Daily coaching',
                                }
                            ].map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="relative w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">{feature.title}</p>
                                        <p className="text-sm text-white/80">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual Column - Central Stats con sfondo semi-trasparente */}
                    <div className="relative lg:block hidden h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full aspect-square backdrop-blur-sm bg-black/20 rounded-full p-8">
                                <div className="relative w-full h-full">
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
                                                repeatDelay: 16,
                                            }}
                                        >
                                            <motion.div
                                                className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-3"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <item.icon className="h-8 w-8 text-white" />
                                            </motion.div>
                                            <motion.p
                                                className="text-2xl font-bold text-white mb-1"
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
                                            <p className="text-sm text-white/80">{item.desc}</p>
                                        </motion.div>
                                    ))}
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