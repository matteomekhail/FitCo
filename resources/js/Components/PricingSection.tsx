import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { motion } from 'framer-motion';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanProps {
  title: string;
  subtitle: string;
  price: number;
  frequency: string;
  features: PlanFeature[];
  buttonLink: string;
  highlighted?: boolean;
}

function PlanCard({ title, subtitle, price, frequency, features, buttonLink, highlighted }: PlanProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`w-full max-w-sm mx-auto flex flex-col h-full ${
        highlighted ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'
      } shadow-2xl rounded-3xl overflow-hidden relative border-2 ${
        highlighted ? 'border-accent' : 'border-transparent'
      }`}>
        {highlighted && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            MOST POPULAR
          </Badge>
        )}
        <CardHeader className="text-center pt-8">
          <CardTitle className="text-3xl font-extrabold mb-2">{title}</CardTitle>
          <p className="text-sm opacity-80 mb-4">{subtitle}</p>
          <div className="text-center mb-4">
            <span className="text-5xl font-bold">${price}</span>
            <span className="text-lg opacity-80">/{frequency}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow px-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.included ? (
                  <Check className={`mr-3 flex-shrink-0 ${highlighted ? 'text-accent' : 'text-black'}`} size={20} />
                ) : (
                  <X className="text-destructive mr-3 flex-shrink-0" size={20} />
                )}
                <span className="text-sm">{feature.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto pb-8 px-8">
          <Button className={`w-full py-6 text-lg font-semibold rounded-full ${
            highlighted ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`} asChild>
            <a href={buttonLink}>Get Started</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'membership' | 'oneOff'>('membership');

  const plans = {
    membership: [
      {
        title: "Nutrition Only",
        subtitle: "Basic Coaching",
        price: 54.95,
        frequency: "weekly",
        features: [
          { name: "2 x Single Day Tailored Meal Plans Per Fortnight", included: true },
          { name: "Meal swaps", included: true },
          { name: "Specific Macro Targets", included: true },
          { name: "Fortnightly Check-Ins", included: true },
          { name: "Access To The Fitco App", included: true },
          { name: "Ongoing support and accountability", included: true },
          { name: "Access To The Fit Co Community", included: true }
        ],
        buttonLink: "https://www.trainerize.me/profile/transformxfitness1/?planGUID=50d5db50290042a88b470ea00b6b59a2",
        highlighted: false
      },
      {
        title: "Training and Nutrition",
        subtitle: "Complete Coaching",
        price: 74.95,
        frequency: "weekly",
        features: [
          { name: "2 x Single Day Meal Plans Per Fortnight", included: true },
          { name: "Specific Macro Targets", included: true },
          { name: "Fortnightly Check-Ins", included: true },
          { name: "Access To The Fitco App", included: true },
          { name: "Ongoing Email Support", included: true },
          { name: "Access To The Fitco Community", included: true },
          { name: "Weekly Training Program (Gym)", included: true }
        ],
        buttonLink: "https://www.trainerize.me/checkout/transformxfitness1/Jake.Ormerod?planGUID=de7cc0193b69421a9ce27c7691cc41d8",
        highlighted: true
      }
    ],
    oneOff: [
      {
        title: "Once Off Nutrition",
        subtitle: "Quick Start Plan",
        price: 200,
        frequency: "one-time",
        features: [
          { name: "2 x Single Day Meals Plans", included: true },
          { name: "Specific Macro & Calorie Targets", included: true },
          { name: "Access to the Fitco App", included: true },
          { name: "Ongoing Email Support", included: true },
          { name: "1 Check in", included: true },
          { name: "Access to the Fitco Community", included: true }
        ],
        buttonLink: "https://www.trainerize.me/profile/transformxfitness1/?planGUID=cfd126026d5948d493b11025e0e7a602",
        highlighted: false
      },
      {
        title: "Once Off Training and Nutrition",
        subtitle: "Comprehensive Start",
        price: 300,
        frequency: "one-time",
        features: [
          { name: "2 x Single Day Meals Plans", included: true },
          { name: "Specific Macro & Calorie Targets", included: true },
          { name: "Tailored 1 Month Training Block", included: true },
          { name: "Access to the Fitco App", included: true },
          { name: "Ongoing Email Support", included: true },
          { name: "1 Check in Email", included: true },
          { name: "Access to the Fitco Community", included: true }
        ],
        buttonLink: "https://www.trainerize.me/profile/transformxfitness1/?planGUID=2ff503025330456499b9615ab06a9947",
        highlighted: true
      }
    ]
  };

  return (
    <section id="pricing-section" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-foreground mb-4">Choose Your Fitness Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tailored plans to meet your unique goals and lifestyle</p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-muted p-1 rounded-full inline-flex">
            <Button
              variant={activeTab === 'membership' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-3 transition-all duration-300 ${
                activeTab === 'membership' ? 'shadow-md' : ''
              }`}
              onClick={() => setActiveTab('membership')}
            >
              Membership Plans
            </Button>
            <Button
              variant={activeTab === 'oneOff' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-3 transition-all duration-300 ${
                activeTab === 'oneOff' ? 'shadow-md' : ''
              }`}
              onClick={() => setActiveTab('oneOff')}
            >
              One-Off Plans
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {plans[activeTab].map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
