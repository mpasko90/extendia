"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Quote, 
  Facebook, 
  Instagram, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Form Components
import { HydrationSafeInput } from "@/components/ui/hydration-safe-input";
import { HydrationSafeTextarea } from "@/components/ui/hydration-safe-textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// State Management
import { useState } from "react";

// Shadcn UI Components
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components/ui/project-card";
import { ImageFallback } from "@/components/ui/image-fallback";

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  area: string;
  completionDate?: string;
  value?: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  projectUrl: string;
  projectImage: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: string;
}

const featuredProjects: Project[] = [
  {
    slug: "richmond-house-extension",
    title: "Spacious House Extension in Richmond",
    description: "A stunning extension project creating a light-filled living space perfect for modern family life. Features bi-fold doors and open-plan kitchen.",
    imageUrl: "/property-extension-south-west-london.jpg",
    category: "House Extensions",
    area: "Richmond",
    completionDate: "2024-02",
    value: "£85,000"
  },
  {
    slug: "wimbledon-loft-conversion",
    title: "Modern Loft Conversion in Wimbledon",
    description: "A contemporary loft conversion with en-suite bathroom and excellent natural light. Maximizing space while maintaining character.",
    imageUrl: "/loft-conversion-design-ideas.jpg",
    category: "Loft Conversions",
    area: "Wimbledon",
    completionDate: "2024-01"
  },
  {
    slug: "kingston-house-renovation",
    title: "Complete House Renovation in Kingston",
    description: "Comprehensive renovation combining modern amenities with period features. Includes kitchen extension and energy efficiency upgrades.",
    imageUrl: "/house-renovation-south-west-london.jpg",
    category: "Full Renovation",
    area: "Kingston",
    completionDate: "2023-12",
    value: "£180,000"
  }
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Amazing transformation of our home. The team was professional and efficient throughout.",
    author: "Sarah Thompson",
    location: "Wimbledon",
    projectUrl: "/portfolio/wimbledon-house-extension",
    projectImage: "/images/projects/wimbledon-extension.jpg"
  },
  {
    id: "2",
    quote: "Couldn't be happier with our new loft conversion. Extendia made the whole process smooth and stress-free.",
    author: "James Wilson",
    location: "Richmond",
    projectUrl: "/portfolio/richmond-loft-conversion",
    projectImage: "/images/projects/richmond-loft.jpg"
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How long does a typical house extension take?",
    answer: "The duration varies depending on the size and complexity of the project. A typical single-storey extension takes 12-14 weeks, while a double-storey extension might take 16-20 weeks."
  },
  {
    question: "Do you handle planning permission applications?",
    answer: "Yes, we manage the entire planning permission process, including preparing and submitting applications, liaising with local authorities, and handling any necessary revisions."
  },
  {
    question: "What areas do you cover?",
    answer: "We primarily serve South West London, including Kingston upon Thames, Wimbledon, Richmond, Putney, Surbiton, and Twickenham."
  },
];

const areas = [
  "Kingston upon Thames",
  "Twickenham",
  "Wimbledon",
  "Putney",
  "Surbiton",
  "Richmond"
];

const whyChooseUs = [
  {
    title: "Family-Owned Business",
    description: "Personal attention and commitment to every project we undertake."
  },
  {
    title: "Fully Insured",
    description: "Complete peace of mind with comprehensive insurance coverage."
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with years of experience in construction."
  },
  {
    title: "Quality Guaranteed",
    description: "10-year warranty on all our extension and conversion work."
  }
];

const services: Service[] = [
  {
    title: "House Extensions",
    description: "Expand your living space with custom-designed extensions that perfectly match your home and lifestyle.",
    imageUrl: "/property-extension-south-west-london.jpg",
    imageAlt: "Modern house extension in South West London showcasing open-plan living space",
    price: "From £30,000"
  },
  {
    title: "Loft Conversions",
    description: "Transform your unused loft into a stunning new living space with our expert conversion services.",
    imageUrl: "/loft-conversion-design-ideas.jpg",
    imageAlt: "Contemporary loft conversion with excellent natural light and modern finishes",
    price: "From £25,000"
  },
  {
    title: "Full Renovations",
    description: "Comprehensive home renovation services to transform your property while maintaining its character.",
    imageUrl: "/house-renovation-south-west-london.jpg",
    imageAlt: "Complete house renovation project showcasing modern interior design",
    price: "From £50,000"
  }
];

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const schemaData = {
    "@type": "Project",
    "@context": "https://schema.org",
    name: project.title,
    description: project.description,
    image: project.imageUrl,
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: project.area,
        addressRegion: "London",
        addressCountry: "UK"
      }
    },
    category: project.category,
    ...(project.completionDate && { dateCompleted: project.completionDate }),
    ...(project.value && { value: project.value }),
    provider: {
      "@type": "Organization",
      name: "Extendia",
      url: "https://www.extendia.co.uk"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <Link href={`/portfolio/${project.slug}`}>
          <div className="relative aspect-[16/9]">
            <ImageFallback
              src={project.imageUrl}
              alt={`${project.category} in ${project.area} - ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              fallbackSrc="/property-extension-south-west-london.jpg"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge 
                variant="secondary" 
                className="text-xs font-medium"
                aria-label={`Project category: ${project.category}`}
              >
                {project.category}
              </Badge>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" aria-hidden="true" />
                <span className="text-xs">{project.area}</span>
              </div>
            </div>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            {(project.completionDate || project.value) && (
              <div className="flex justify-between mt-4 text-sm">
                {project.completionDate && (
                  <span className="text-muted-foreground">
                    Completed: {new Date(project.completionDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </span>
                )}
                {project.value && (
                  <span className="font-medium">{project.value}</span>
                )}
              </div>
            )}
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <HydrationSafeInput
          id="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <HydrationSafeInput
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <HydrationSafeInput
          id="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="projectType">Project Type</Label>
        <HydrationSafeInput
          id="projectType"
          type="text"
          placeholder="e.g., House Extension, Loft Conversion"
          value={formData.projectType}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="message">Project Details</Label>
        <HydrationSafeTextarea
          id="message"
          placeholder="Tell us about your project"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" variant="secondary" size="lg" className="w-full">
        Request Consultation
      </Button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-32">
      {/* Hero Section */}
      <section id="hero" className="relative bg-brand-light text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-24 px-4">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-display-2 font-bold">
              House Extension Specialists South West London
            </h1>
            <p className="text-body-lg">
              Serving Kingston, Twickenham, Wimbledon, Putney & Surbiton. Family
              business with 4.8/5 ★ rating and over 18 reviews.
            </p>
            <div className="flex gap-4">
              <Link href="/your-journey">
                <Button size="lg" variant="default">Start Your Journey</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">View Our Work</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">            <div className="relative aspect-[3/2] w-full max-w-[600px] mx-auto">
              <ImageFallback
                src="/extension-house.jpg"
                alt="Modern house extension in South West London showcasing our expert craftsmanship"
                fill
                className="rounded-lg shadow-lg object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                fallbackSrc="/property-extension-south-west-london.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert construction and renovation services across South West London, delivered with quality craftsmanship and attention to detail.
          </p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block group"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div 
                  className="relative h-48 overflow-hidden"
                >
                  <ImageFallback
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    fallbackSrc="/extendia_house_extension.jpg"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">
                      {service.price}
                    </p>
                    <Button variant="ghost" className="text-primary transition-transform group-hover:translate-x-2">
                      Learn More <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Preview */}
      <section id="your-journey-preview" className="container mx-auto px-4">
        <h2 className="text-heading-2 font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Free Consultation", "Design & Planning", "Construction", "Final Handover"].map(
            (step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            )
          )}
        </div>
        <div className="text-center mt-6">
          <Link href="/your-journey">
            <Button variant="outline">Read Full Process</Button>
          </Link>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section id="areas" className="container mx-auto px-4">
        <h2 className="text-heading-2 font-semibold text-center mb-12">
          Areas We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center justify-center p-4 border rounded-lg bg-slate-50"
            >
              <MapPin className="h-5 w-5 mr-2 text-primary-blue" />
              <span className="font-medium text-center">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Extendia Section */}
      <section id="why-choose-us" className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-heading-2 font-semibold text-center mb-12 text-white">
            Why Choose Extendia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center text-white"
              >
                <CheckCircle className="h-12 w-12 text-accent-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section id="recent-projects" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-semibold mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest home improvement projects across South West London. 
            Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/portfolio" 
            className="group inline-flex items-center"
          >
            <Button size="lg" variant="default">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-heading-2 font-semibold text-center mb-12">
                What Our Clients Say
            </h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="flex flex-col justify-between h-full">
                                    <CardHeader>
                                        <Quote className="h-8 w-8 text-primary mb-4" />
                                        <p className="text-muted-foreground text-sm">{testimonial.quote}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-bold">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4">
        <h2 className="text-heading-2 font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <Link href="/resources/frequently-asked-questions">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-brand-light py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-heading-2 font-semibold text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Request a Free Consultation
              </h3>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
              <p>
                For any inquiries, please feel free to contact us. We are
                available from Monday to Friday, 9 AM to 5 PM.
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-accent-orange" />
                <a
                  href="tel:02081234567"
                  className="text-lg hover:underline"
                >
                  020 8123 4567
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-accent-orange" />
                <a
                  href="mailto:contact@extendia.co.uk"
                  className="text-lg hover:underline"
                >
                  contact@extendia.co.uk
                </a>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                    <Link href="https://facebook.com/extendia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="h-6 w-6 text-white transition-colors hover:text-accent-orange" />
                    </Link>
                    <Link href="https://instagram.com/extendia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-6 w-6 text-white transition-colors hover:text-accent-orange" />
                    </Link>
                    <Link href="https://houzz.co.uk/pro/extendia" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
                        <Home className="h-6 w-6 text-white transition-colors hover:text-accent-orange" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
