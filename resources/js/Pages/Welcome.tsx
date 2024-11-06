import React from 'react';
import AppLayout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/HeroSection';
import ServicesSection from '@/Components/Services';
import PricingSection from '@/Components/PricingSection';
import ContactUsSection from '@/Components/ContactUs';
import TransformationGallery from '@/Components/Testimonials';
import CTASection from '@/Components/CTA';

export default function Home() {
  return (
    <AppLayout title="Home">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <TransformationGallery />
        <CTASection />
    </AppLayout>
  );
}