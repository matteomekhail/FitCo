import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageSrc }) => (
  <div className="relative group overflow-hidden h-[400px]">
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300" />
    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-lg mb-4">{subtitle}</p>
      <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "NUTRITION COACHING",
      subtitle: "Personalized meal plans",
      imageSrc: "/img/nutrition.jpg"
    },
    {
      title: "TRAINING & NUTRITION COACHING",
      subtitle: "Comprehensive fitness programs",
      imageSrc: "/img/TrainingNutrition.jpg"
    },
    {
      title: "TRAINING ONLY",
      subtitle: "Custom workout routines",
      imageSrc: "/img/Training.jpg"
    }
  ];

  return (
    <section className="bg-[#0197F6]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;