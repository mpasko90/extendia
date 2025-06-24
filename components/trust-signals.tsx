'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Award, Shield, ThumbsUp, Users, Certificate } from 'lucide-react';

interface TrustSignal {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const trustSignals: TrustSignal[] = [
  {
    icon: <Star className="h-8 w-8 text-accent-orange" />,
    label: 'Customer Rating',
    value: '4.9/5 Average'
  },
  {
    icon: <Shield className="h-8 w-8 text-accent-orange" />,
    label: 'Fully Insured',
    value: 'Protected & Certified'
  },
  {
    icon: <Users className="h-8 w-8 text-accent-orange" />,
    label: 'Happy Clients',
    value: '500+ Projects'
  },
  {
    icon: <Certificate className="h-8 w-8 text-accent-orange" />,
    label: 'Experience',
    value: '15+ Years'
  },
  {
    icon: <Award className="h-8 w-8 text-accent-orange" />,
    label: 'Award Winning',
    value: 'Best in London'
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-accent-orange" />,
    label: 'Satisfaction',
    value: '100% Guaranteed'
  }
];

export function TrustSignals() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Extendia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustSignals.map((signal, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  {signal.icon}
                  <h3 className="font-semibold text-lg">{signal.label}</h3>
                  <p className="text-muted-foreground">{signal.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
          <Image
            src="/logos/fmb.png"
            alt="Federation of Master Builders Logo"
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/logos/trustmark.png"
            alt="TrustMark Logo"
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/logos/which.png"
            alt="Which? Trusted Traders Logo"
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src="/logos/checkatrade.png"
            alt="Checkatrade Logo"
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
