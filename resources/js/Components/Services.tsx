import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, imageSrc, link }) => (
  <a href={link} className="relative group overflow-hidden h-[400px] block">
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300" />
    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-lg mb-4">{subtitle}</p>
      <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
    </div>
  </a>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "NUTRITION COACHING",
      subtitle: "Personalized meal plans",
      imageSrc: "/img/nutrition.jpg",
      link: "https://www.trainerize.me/profile/transformxfitness1/?planGUID=50d5db50290042a88b470ea00b6b59a2"
    },
    {
      title: "TRAINING & NUTRITION COACHING",
      subtitle: "Comprehensive fitness programs",
      imageSrc: "/img/TrainingNutrition.jpg",
      link: "https://www.trainerize.me/checkout/transformxfitness1/Jake.Ormerod?planGUID=de7cc0193b69421a9ce27c7691cc41d8"
    },
    {
      title: "TRAINING & NUTRITION ONCE OFF",
      subtitle: "Custom workout routines",
      imageSrc: "/img/Training.jpg",
      link: "https://www.trainerize.me/profile/transformxfitness1/?planGUID=2ff503025330456499b9615ab06a9947"
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
