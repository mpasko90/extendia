"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  delay: number;
}

export function FAQAccordionSection() {
  const faqs: FAQItem[] = [
    {
      question: "How long does a typical house extension project take?",
      answer: "Project duration varies based on size and complexity. A typical single-story extension takes 12-16 weeks, while larger projects may take 20-24 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the process.",
      delay: 0.1
    },
    {
      question: "Do you handle all necessary planning permissions?",
      answer: "Yes, we manage the entire planning permission process. Our team handles all documentation, submits applications to local authorities, and ensures compliance with building regulations. We have extensive experience with local planning requirements in South West London.",
      delay: 0.2
    },
    {
      question: "Can I stay in my home during the construction?",
      answer: "In most cases, yes. We implement careful planning and dust control measures to minimize disruption to your daily life. Our team works in phases to ensure you can continue living in your home safely and comfortably during construction.",
      delay: 0.3
    },
    {
      question: "What warranties do you offer on your work?",
      answer: "We provide a comprehensive 10-year structural warranty on all our construction work. Additionally, all fixtures and fittings come with their respective manufacturer warranties. We also offer a 2-year workmanship guarantee on all installations.",
      delay: 0.4
    },
    {
      question: "How do you handle project costs and payments?",
      answer: "We provide detailed, transparent quotes upfront with no hidden costs. Payment is structured in stages throughout the project, tied to specific milestones. We offer flexible payment plans and work with you to establish a comfortable payment schedule.",
      delay: 0.5
    },
    {
      question: "What areas of South West London do you cover?",
      answer: "We serve all major areas in South West London, including Kingston upon Thames, Richmond, Wimbledon, Putney, Twickenham, and Surbiton. Our team is familiar with local building regulations and planning requirements across these areas.",
      delay: 0.6
    }
  ];

  return (
    <section className="bg-[#3A6AB0] py-20">
      <div className="container max-w-4xl px-4 md:px-6">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[600px] text-gray-200">
              Find answers to common questions about our services and process
            </p>
          </div>
        </BlurFade>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <BlurFade key={index} delay={faq.delay}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none bg-[#97B1D6] rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-[#F59E0B] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#B9B9B9]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </BlurFade>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
