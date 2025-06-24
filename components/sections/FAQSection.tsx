"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";

/**
 * FAQ Preview section component
 * Accordion with top questions and FAQ schema markup
 */
export function FAQSection() {
  const faqs = [
    {
      question: "How much does a house extension cost?",
      answer: "The cost of a house extension varies depending on size, complexity, and finishes. Single-storey extensions typically range from £15,000-£30,000, while double-storey extensions can range from £30,000-£60,000. We provide detailed quotes after our free consultation."
    },
    {
      question: "Do I need planning permission for my extension?",
      answer: "Many single-storey rear extensions can be built under Permitted Development Rights without planning permission. However, larger extensions, side returns, or front extensions typically require planning permission. We handle all planning applications as part of our service."
    },
    {
      question: "How long does a typical extension project take?",
      answer: "Project timelines vary by complexity. Single-storey extensions typically take 8-12 weeks, while double-storey extensions take 12-20 weeks. This includes planning, construction, and finishing. We provide detailed project schedules during the design phase."
    },
    {
      question: "What areas do you cover in South West London?",
      answer: "We serve all areas of South West London including Kingston upon Thames, Richmond, Wimbledon, Putney, Twickenham, Surbiton, and surrounding areas. Contact us to confirm coverage for your specific location."
    },
    {
      question: "Are you fully insured and qualified?",
      answer: "Yes, we carry £2M public liability insurance and all our tradespeople are fully qualified and certified. We&apos;re also members of relevant trade associations and follow all current building regulations and safety standards."
    },
    {
      question: "What happens if there are issues during construction?",
      answer: "We maintain comprehensive insurance and provide warranties on all our work. Our project managers monitor progress daily and address any issues immediately. We also provide regular updates and maintain open communication throughout the project."
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section 
        className="py-16 bg-neutral-100"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-6">
                  <HelpCircle className="h-12 w-12 text-brand-600 mr-4" />
                  <h2 
                    id="faq-heading"                    className="text-4xl md:text-5xl font-bold text-neutral-800"
                  >
                    Frequently Asked <span className="text-brand-600">Questions</span>
                  </h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Get quick answers to the most common questions about our construction 
                  services, process, and what to expect from your project.
                </p>
              </motion.div>
            </BlurFade>
          </div>

          {/* FAQ Accordion */}
          <BlurFade delay={0.3} inView>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg shadow-lg border-0 overflow-hidden"
                  >                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 [&[data-state=open]]:bg-brand-600/5">
                      <span className="text-lg font-semibold text-neutral-800 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </BlurFade>

          {/* Additional Help CTA */}
          <BlurFade delay={0.6} inView>
            <motion.div 
              className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Our experts are here to help. Get personalized answers and advice 
                for your specific project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3"
                >
                  <Link 
                    href="/contact"
                    aria-label="Contact us for personalized answers"
                  >
                    Get Expert Advice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white font-semibold px-8 py-3"
                >
                  <Link 
                    href="/resources/frequently-asked-questions"
                    aria-label="View complete FAQ section"
                  >
                    View All FAQs
                  </Link>
                </Button>
              </div>
            </motion.div>
          </BlurFade>

          {/* Quick Contact Options */}
          <BlurFade delay={0.8} inView>
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >              <div className="bg-gradient-to-r from-brand-600/10 to-brand-600/5 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                  Call for Immediate Help
                </h4>
                <p className="text-gray-600 mb-4">
                  Speak directly with our construction experts
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white"
                >
                  <Link href="tel:+442012345678">
                    (020) 1234 5678
                  </Link>
                </Button>
              </div>
                <div className="bg-gradient-to-r from-warning-DEFAULT/10 to-warning-DEFAULT/5 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                  Schedule Free Consultation
                </h4>
                <p className="text-gray-600 mb-4">
                  Book a no-obligation site visit and quote
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white"
                >
                  <Link href="/contact">
                    Book Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
