import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Button } from "@/Components/ui/button";

const transformations = [
    { imageUrl: '/img/Tras1.jpeg' },
    { imageUrl: '/img/Tras2.jpeg' },
    { imageUrl: '/img/Tras3.jpeg' },
    { imageUrl: '/img/Tras4.jpeg' },
    { imageUrl: '/img/Tras5.jpeg' },
    { imageUrl: '/img/Tras6.jpeg' }
];

function TransformationGallery() {
    return (
        <section id='transformation' className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/60 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
                <div className="absolute -top-10 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                            Success Stories
                        </motion.span>
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                                <span className="block text-gray-900">Real People.</span>
                                <span className="block mt-2 text-primary">Real Results.</span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                                See the incredible results our clients have achieved through dedication and expert guidance
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Carousel */}
                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {transformations.map((transformation, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 via-white to-primary/5 p-1">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
                                        <div className="relative rounded-[22px] overflow-hidden aspect-[4/5]">
                                            <img
                                                src={transformation.imageUrl}
                                                alt="Transformation"
                                                className="w-full h-full object-cover"
                                            />
                                            
                                            {/* Labels */}
                                            <div className="absolute top-0 left-0 right-0 flex items-center">
                                                <div className="flex-1 bg-black/50 text-white p-3 text-lg font-medium">
                                                    Before
                                                </div>
                                                <div className="flex-1 bg-primary/50 text-white p-3 text-lg font-medium text-right">
                                                    After
                                                </div>
                                            </div>

                                            {/* Time Badge */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                                <span className="inline-block bg-white/90 backdrop-blur-sm text-primary rounded-full px-4 py-1 text-sm font-medium shadow-lg">
                                                    12 Week Transformation
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12 bg-white/80 border-0 hover:bg-white text-primary shadow-lg hover:shadow-xl">
                                <ChevronLeft className="h-8 w-8" />
                            </CarouselPrevious>
                            <CarouselNext className="-right-12 bg-white/80 border-0 hover:bg-white text-primary shadow-lg hover:shadow-xl">
                                <ChevronRight className="h-8 w-8" />
                            </CarouselNext>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default TransformationGallery;