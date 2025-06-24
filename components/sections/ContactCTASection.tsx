"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HydrationSafeInput } from "@/components/ui/hydration-safe-input";
import { HydrationSafeTextarea } from "@/components/ui/hydration-safe-textarea";
import { HydrationSafeSelect } from "@/components/ui/hydration-safe-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Award,
  Shield,
  Star
} from "lucide-react";

/**
 * Contact CTA section component
 * Full-width contact form with social proof and trust signals
 */
export function ContactCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our experts",
      action: "(020) 1234 5678",
      href: "tel:+442012345678",
      color: "text-white",
      bgColor: "bg-success-DEFAULT hover:bg-success-dark"
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "Get a detailed response within 24 hours",
      action: "info@extendia.co.uk",
      href: "mailto:info@extendia.co.uk",
      color: "text-white",
      bgColor: "bg-brand-600 hover:bg-brand-700"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat for immediate questions",
      action: "Message Us",
      href: "https://wa.me/442012345678",
      color: "text-white", 
      bgColor: "bg-success-600 hover:bg-success-700"
    }
  ];

  const socialProof = [
    { icon: Award, text: "Award Winning", bgColor: "bg-yellow-600" },
    { icon: Shield, text: "Fully Insured", bgColor: "bg-green-600" },
    { icon: Star, text: "4.8★ Rating", bgColor: "bg-blue-600" },
    { icon: Clock, text: "15+ Years", bgColor: "bg-purple-600" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      className="py-16 bg-brand-600 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        
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
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to <span className="text-warning-DEFAULT">Transform</span> Your Home?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Get your free consultation today. Our experts will assess your project, 
                provide detailed quotes, and guide you through every step of the process.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Contact Methods */}
        <BlurFade delay={0.3} inView>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
              >
                <Button 
                  asChild
                  size="lg"
                  className={`w-full h-auto p-6 ${method.bgColor} ${method.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Link 
                    href={method.href}
                    className="flex flex-col items-center text-center space-y-3"
                    aria-label={`${method.title}: ${method.action}`}
                  >
                    <method.icon className="h-8 w-8" />
                    <div>
                      <div className="font-bold text-lg mb-1">{method.title}</div>
                      <div className="text-sm opacity-90 mb-2">{method.description}</div>
                      <div className="font-semibold">{method.action}</div>
                    </div>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <BlurFade delay={0.5} inView>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>                  <CardTitle className="text-2xl font-bold text-neutral-800 flex items-center">
                    <Calendar className="h-6 w-6 mr-3 text-brand-600" />
                    Get Your Free Quote
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>                        <HydrationSafeInput
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-brand-600 focus:ring-brand-600"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>                        <HydrationSafeInput
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-brand-600 focus:ring-brand-600"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>                      <HydrationSafeInput
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-brand-600 focus:ring-brand-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>                      <HydrationSafeSelect
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-brand-600 focus:ring-brand-600 focus:outline-none"
                      >
                        <option value="">Select project type</option>
                        <option value="house-extension">House Extension</option>
                        <option value="loft-conversion">Loft Conversion</option>
                        <option value="bathroom-renovation">Bathroom Renovation</option>
                        <option value="kitchen-extension">Kitchen Extension</option>
                        <option value="full-renovation">Full Renovation</option>                        <option value="other">Other</option>
                      </HydrationSafeSelect>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>                      <HydrationSafeTextarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-brand-600 focus:ring-brand-600"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-warning-DEFAULT hover:bg-warning-dark text-white font-semibold py-3"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send My Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>

          {/* Contact Information & Social Proof */}
          <BlurFade delay={0.7} inView>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-[#f59e0b]" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#f59e0b]" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-white/90">(020) 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#f59e0b]" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-white/90">info@extendia.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#f59e0b]" />
                    <div>
                      <div className="font-semibold">Hours</div>
                      <div className="text-white/90">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Proof Badges */}
              <div className="grid grid-cols-2 gap-4">
                {socialProof.map((proof) => (
                  <motion.div
                    key={proof.text}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge 
                      className={`${proof.bgColor} text-white p-4 text-center justify-center w-full h-16 flex flex-col space-y-1`}
                    >
                      <proof.icon className="h-5 w-5" />
                      <span className="text-xs font-medium">{proof.text}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Trust Message */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Why Choose Extendia?</h3>
                  <ul className="text-left space-y-2 text-white/90">
                    <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-[#f59e0b]" /> £2M Public Liability Insurance</li>
                    <li className="flex items-center"><Award className="h-4 w-4 mr-2 text-[#f59e0b]" /> Award-Winning Quality</li>
                    <li className="flex items-center"><Clock className="h-4 w-4 mr-2 text-[#f59e0b]" /> 15+ Years Experience</li>
                    <li className="flex items-center"><Star className="h-4 w-4 mr-2 text-[#f59e0b]" /> 4.8★ Customer Rating</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
