"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/molecules/carousel/carousel";
import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  Clock, 
  Users,
  Star,
  Quote,
  CheckCircle
} from "lucide-react";

/**
 * Why Choose Extendia section component
 * Trust signals and testimonials carousel
 */
export function WhyChooseSection() {
  const trustSignals = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "£2M public liability insurance for complete peace of mind",
      bgColor: "bg-green-50",
      iconBg: "bg-green-600/10",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in construction and customer service",
      bgColor: "bg-yellow-50", 
      iconBg: "bg-yellow-600/10",
      iconColor: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Established expertise in South West London construction",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-600/10", 
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Family Business",
      description: "Personal service and long-term relationships with our clients",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-600/10",
      iconColor: "text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Kingston upon Thames", 
      rating: 5,
      text: "Extendia transformed our Victorian terrace with a stunning kitchen extension. The team was professional, punctual, and the quality exceeded our expectations.",
      project: "Kitchen Extension"
    },
    {
      name: "Michael Chen",
      location: "Richmond",
      rating: 5, 
      text: "Our loft conversion created the perfect home office. The project was completed on time and within budget. Highly recommend their expertise.",
      project: "Loft Conversion"
    },
    {
      name: "Emma Thompson", 
      location: "Wimbledon",
      rating: 5,
      text: "From planning to completion, Extendia made our house extension dream a reality. Excellent communication throughout the entire process.",
      project: "Two-Storey Extension"
    },
    {
      name: "David Wilson",
      location: "Putney",
      rating: 5,
      text: "Professional, reliable, and skilled craftsmen. Our bathroom renovation was completed to the highest standard with minimal disruption.",
      project: "Bathroom Renovation"
    }
  ];

  return (
    <section 
      className="py-16 bg-neutral-100"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 
                id="why-choose-heading"                className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
              >
                Why Choose <span className="text-brand-600">Extendia</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine years of expertise with a personal touch to deliver 
                exceptional construction services you can trust.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustSignals.map((signal, index) => (
            <BlurFade key={signal.title} delay={0.2 + index * 0.1} inView>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
              >
                <Card className={`h-full ${signal.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${signal.iconBg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <signal.icon className={`h-8 w-8 ${signal.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-800 mb-3">
                      {signal.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {signal.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonials Section */}
        <BlurFade delay={0.6} inView>
          <div className="text-center mb-12">            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              What Our <span className="text-brand-600">Clients</span> Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - here&apos;s what our satisfied clients have to say about their experience with Extendia.
            </p>
          </div>
        </BlurFade>

        {/* Testimonials Carousel */}
        <BlurFade delay={0.8} inView>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        
                        {/* Quote Icon */}
                        <Quote className="h-8 w-8 text-brand-600 mb-4" />
                        
                        {/* Rating Stars */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </blockquote>
                        
                        {/* Client Info */}
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <cite className="font-semibold text-neutral-800 not-italic">
                                {testimonial.name}
                              </cite>
                              <p className="text-sm text-gray-600">
                                {testimonial.location}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-brand-600">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                <span className="text-sm font-medium">
                                  {testimonial.project}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </BlurFade>

        {/* Additional Trust Badges */}
        <BlurFade delay={1.0} inView>
          <motion.div 
            className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">4.8★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">100%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
