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

}

const transformations: Transformation[] = [
    { imageUrl: '/img/Tras1.jpeg' },
    { imageUrl: '/img/Tras2.jpeg' },
    { imageUrl: '/img/Tras3.jpeg' },
    { imageUrl: '/img/Tras4.jpeg' },
    { imageUrl: '/img/Tras5.jpeg' },
    { imageUrl: '/img/Tras6.jpeg' },
];

interface TransformationCardProps {
    transformation: Transformation;
    onClick: () => void;
}

const TransformationCard: React.FC<TransformationCardProps> = ({ transformation, onClick }) => (
    <motion.div
        className="h-full w-full cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
    >
        <Card className="overflow-hidden h-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 rounded-xl">
            <CardContent className="p-0 h-full bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-full group">
                    <img
                        src={transformation.imageUrl}
                        alt="Transformation"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white" size={32} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <Badge variant="secondary" className="mb-2 bg-blue-500 text-white font-semibold px-3 py-1">Before & After</Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const TransformationGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <section className="py-20 text-foreground relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2 
                    className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Incredible Transformations
                </motion.h2>
                <motion.p 
                    className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
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
                                    onClick={() => setSelectedImage(transformation.imageUrl)}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 lg:-left-16 bg-white/10 text-white border-none">
                        <ChevronLeft size={24} />
                    </CarouselPrevious>
                    <CarouselNext className="right-0 lg:-right-16 bg-white/10 text-white border-none">
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
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Enlarged transformation"
                            className="max-w-[80vw] max-h-[80vh] object-contain"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 120 }}
                        />
                        <Button
                            className="absolute top-4 right-4 bg-transparent hover:bg-white/10 text-white rounded-full p-2"
                            onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X size={24} />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TransformationGallery;