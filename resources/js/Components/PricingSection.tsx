import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';

interface PlanProps {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
}

const PlanCard: React.FC<PlanProps> = ({ title, subtitle, price, features }) => (
  <Card className="w-full max-w-sm mx-auto flex flex-col h-full bg-gradient-to-b from-blue-100 to-blue-200">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="text-3xl font-bold text-primary mb-6">${price.toFixed(2)}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full">BUY NOW</Button>
    </CardFooter>
  </Card>
);

const PricingSection: React.FC = () => {
  const plans: PlanProps[] = [
    {
      title: "DYNAMIC DUO SUMMER 6 WEEK CHALLENGE",
      subtitle: "PACKAGE ONE",
      price: 59.95,
      features: [
        "2X 3 WEEK PROGRAMS",
        "DYNAMIC DUO ACTIVITIES",
        "EXPERT TASTY SET MEAL PLANS SUITED TO YOU",
        "DISCOUNTED MEALS",
        "DYNAMIC DUO CHALLENGES",
        "STEP TARGETS",
        "COMMUNITY HIKE"
      ]
    },
    {
      title: "TRAINING AND NUTRITION",
      subtitle: "PACKAGE 2",
      price: 189,
      features: [
        "2X A DAY FIT FOOD CO MEALS (14 PER WEEK)",
        "2X 3 WEEK PROGRAMS",
        "DYNAMIC DUO ACTIVITIES",
        "SET BREAKFASTS",
        "SET SNACKS",
        "DISCOUNTED MEALS",
        "DYNAMIC DUO CHALLENGES",
        "STEP TARGETS",
        "COMMUNITY HIKE"
      ]
    },
    {
      title: "NUTRITION",
      subtitle: "PACKAGE 3",
      price: 175,
      features: [
        "SET MEAL PLAN",
        "2X A DAY FIT FOOD CO MEALS (14 PER WEEK)",
        "SET BREAKFASTS",
        "SET SNACKS",
        "STEP TARGETS"
      ]
    }
  ];

  return (
    <section className="py-16 bg-zinc-100 shadown-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-2">CHOOSE YOUR PLAN 🔥</h2>
        <p className="text-center text-blue-500 mb-12">Select the perfect plan to kickstart your fitness journey</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;