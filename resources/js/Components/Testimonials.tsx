import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';

interface Transformation {
    imageUrl: string;
    name: string;
    description: string;
}

const transformations: Transformation[] = [
    { imageUrl: '/img/Tras1.jpeg', name: "John Doe", description: "Lost 30kg in 6 months" },
    { imageUrl: '/img/Tras2.jpeg', name: "Jane Smith", description: "Gained 10kg of muscle" },
    { imageUrl: '/img/Tras3.jpeg', name: "Mike Johnson", description: "Improved overall fitness" },
    { imageUrl: '/img/Tras4.jpeg', name: "Emily Brown", description: "Achieved her dream body" },
    { imageUrl: '/img/Tras5.jpeg', name: "David Lee", description: "Transformed lifestyle" },
    { imageUrl: '/img/Tras6.jpeg', name: "Sarah Wilson", description: "Boosted confidence" },
];

interface TransformationCardProps {
    transformation: Transformation;
    onClick: () => void;
}

function TransformationCard({ transformation, onClick }: TransformationCardProps) {
    return (
        <motion.div
            className="h-full w-full cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
        >
            <Card className="overflow-hidden h-full shadow-lg bg-primary p-0.5 rounded-xl">
                <CardContent className="p-0 h-full bg-background rounded-lg overflow-hidden">
                    <div className="relative h-full group">
                        <img
                            src={transformation.imageUrl}
                            alt={`Transformation of ${transformation.name}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-primary-foreground font-bold text-lg">{transformation.name}</h3>
                            <p className="text-primary-foreground/80 text-sm">{transformation.description}</p>
                            <Badge variant="secondary" className="mt-2 self-start bg-secondary text-secondary-foreground font-semibold px-3 py-1">
                                Before & After
                            </Badge>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="text-primary-foreground" size={40} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function TransformationGallery() {
    const [selectedImage, setSelectedImage] = useState<Transformation | null>(null);
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <section className="py-20 text-foreground relative bg-background overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2 
                    className="text-5xl font-bold text-center mb-8 text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Incredible Transformations
                </motion.h2>
                <motion.p 
                    className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Witness the extraordinary journeys of our clients. Each image tells a story of dedication, perseverance, and remarkable results.
                </motion.p>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent>
                        {transformations.map((transformation, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <TransformationCard 
                                    transformation={transformation} 
                                    onClick={() => setSelectedImage(transformation)}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 lg:-left-16 bg-primary/10 text-primary border-none hover:bg-primary/20">
                        <ChevronLeft size={24} />
                    </CarouselPrevious>
                    <CarouselNext className="right-0 lg:-right-16 bg-primary/10 text-primary border-none hover:bg-primary/20">
                        <ChevronRight size={24} />
                    </CarouselNext>
                </Carousel>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/95 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full mx-4">
                            <motion.img
                                src={selectedImage.imageUrl}
                                alt={`Enlarged transformation of ${selectedImage.name}`}
                                className="w-full h-auto object-contain rounded-lg shadow-2xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-primary/70 p-4 rounded-b-lg">
                                <h3 className="text-primary-foreground font-bold text-xl mb-1">{selectedImage.name}</h3>
                                <p className="text-primary-foreground/80">{selectedImage.description}</p>
                            </div>
                            <Button
                                className="absolute top-4 right-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2"
                                onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedImage(null); }}
                            >
                                <X size={24} />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default TransformationGallery;
