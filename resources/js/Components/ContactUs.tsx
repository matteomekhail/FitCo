import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
  <div className="flex items-center space-x-3 mb-4">
    <div className="bg-blue-500 p-2 rounded-full">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </div>
);

const ContactUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Contact Us</h2>
        <p className="text-center text-white mb-12">Get in touch with us for any questions or support</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactInfo 
                icon={<MapPin className="text-white" size={20} />}
                title="Our Location"
                content="123 Fitness Street, Healthy City, 12345"
              />
              <ContactInfo 
                icon={<Phone className="text-white" size={20} />}
                title="Phone Number"
                content="+1 (234) 567-8900"
              />
              <ContactInfo 
                icon={<Mail className="text-white" size={20} />}
                title="Email Address"
                content="info@fitnesschallenge.com"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;