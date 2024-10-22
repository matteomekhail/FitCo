import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className="hover:text-primary transition-colors duration-300">
            {children}
        </a>
    );
}

function SocialIcon({ Icon, href }: { Icon: React.ElementType; href: string }) {
    return (
        <a href={href} className="text-foreground hover:text-primary transition-colors duration-300">
            <Icon size={24} />
        </a>
    );
}

function Footer() {
    return (
        <footer className="bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">About FitCo</h3>
                        <p className="text-sm text-muted-foreground">
                            FitCo is dedicated to helping you achieve your fitness goals through personalized training and nutrition plans.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><FooterLink href="/services">FitFoodCo</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 text-primary" />
                                <FooterLink href="mailto:info@fitco.com">info@fitco.com</FooterLink>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 text-primary" />
                                <FooterLink href="tel:+11234567890">+1 (123) 456-7890</FooterLink>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2 text-primary" />
                                123 Fitness Street, Healthy City, FC 12345
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <SocialIcon Icon={Facebook} href="https://facebook.com/fitco" />
                            <SocialIcon Icon={Instagram} href="https://instagram.com/fitco" />
                            <SocialIcon Icon={Twitter} href="https://twitter.com/fitco" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center text-sm">
                    <p className="text-muted-foreground">&copy; {new Date().getFullYear()} FitCo. All rights reserved.</p>
                    <span className="mt-2 inline-block">
                        Developed and designed by{' '}
                        <a 
                            href="https://stagetwolab.com" 
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#e85f4b] to-[#3a8f87] hover:underline font-semibold"
                        >
                            StageTwo Lab
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
