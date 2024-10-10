import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="hover:text-[#0197F6] transition-colors duration-300">
        {children}
    </a>
);

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => (
    <a href={href} className="text-white hover:text-[#0197F6] transition-colors duration-300">
        <Icon size={24} />
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-[#0197F6] to-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About FitCo</h3>
                        <p className="text-sm">
                            FitCo is dedicated to helping you achieve your fitness goals through personalized training and nutrition plans.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><FooterLink href="/services">FitFoodCo</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <FooterLink href="mailto:info@fitco.com">info@fitco.com</FooterLink>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <FooterLink href="tel:+11234567890">+1 (123) 456-7890</FooterLink>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                123 Fitness Street, Healthy City, FC 12345
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <SocialIcon Icon={Facebook} href="https://facebook.com/fitco" />
                            <SocialIcon Icon={Instagram} href="https://instagram.com/fitco" />
                            <SocialIcon Icon={Twitter} href="https://twitter.com/fitco" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FitCo. All rights reserved.</p>
                <span>Developed and designed by <a href="https://stagetwolab.com" className="bg-clip-text text-transparent bg-gradient-to-r from-[#e85f4b] to-[#3a8f87] hover:underline">StageTwo Lab</a>.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;