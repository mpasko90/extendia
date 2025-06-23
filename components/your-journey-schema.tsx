import { HowTo, WithContext } from 'schema-dts';
import React, { useMemo } from 'react';

// Enhanced schema with improved sequential thinking structure for AI search
const yourJourneySchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Your Journey with Extendia',
  description: 'Our streamlined process for delivering exceptional home extensions and loft conversions, from initial consultation to final handover.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Initial Consultation & Feasibility',
      text: 'We start with a detailed discussion about your vision, requirements, and budget. Our experts assess the feasibility of your project, providing initial advice and a preliminary estimate.',
      url: 'https://extendia.co.uk/your-journey#step-1',
      image: 'https://extendia.co.uk/images/journey/consultation.jpg',
      position: 1,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Schedule an in-home consultation with our design experts'
        },
        {
          '@type': 'HowToDirection',
          text: 'Discuss your vision, requirements, and budget constraints'
        },
        {
          '@type': 'HowToDirection',
          text: 'Receive a preliminary assessment of project feasibility'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Design & Planning',
      text: 'Our architectural designers create detailed plans and 3D visualizations. We handle all aspects of the planning permission process, ensuring your project complies with local regulations.',
      url: 'https://extendia.co.uk/your-journey#step-2',
      image: 'https://extendia.co.uk/images/journey/design.jpg',
      position: 2,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Work with our designers to create your perfect space'
        },
        {
          '@type': 'HowToDirection',
          text: 'Review and approve detailed 3D visualizations'
        },
        {
          '@type': 'HowToDirection',
          text: 'We handle all planning permission applications'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Construction & Project Management',
      text: 'Our dedicated project managers oversee every phase of the construction, ensuring the highest quality standards and timely completion. We provide regular updates, keeping you informed throughout the process.',
      url: 'https://extendia.co.uk/your-journey#step-3',
      image: 'https://extendia.co.uk/images/journey/construction.jpg',
      position: 3,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Dedicated project manager assigned to your build'
        },
        {
          '@type': 'HowToDirection',
          text: 'Regular progress updates and quality control checks'
        },
        {
          '@type': 'HowToDirection',
          text: 'Transparent communication throughout construction'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Finishing & Handover',
      text: 'We focus on the final details, from fixtures and fittings to painting and decorating, ensuring a flawless finish. After a final inspection, we hand over your completed project, ready for you to enjoy.',
      url: 'https://extendia.co.uk/your-journey#step-4',
      image: 'https://extendia.co.uk/images/journey/finishing.jpg',
      position: 4,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'High-quality finishing of all surfaces and fixtures'
        },
        {
          '@type': 'HowToDirection',
          text: 'Comprehensive final inspection with you'
        },
        {
          '@type': 'HowToDirection',
          text: 'Project handover once you are completely satisfied'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Post-Completion Support',
      text: 'Our commitment to you doesn\'t end at handover. We provide comprehensive post-completion support, ensuring your new space continues to meet your expectations.',
      url: 'https://extendia.co.uk/your-journey#step-5',
      image: 'https://extendia.co.uk/images/journey/support.jpg',
      position: 5,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Comprehensive warranty on all work completed'
        },
        {
          '@type': 'HowToDirection',
          text: 'Follow-up visits to ensure satisfaction'
        },
        {
          '@type': 'HowToDirection',
          text: 'Ongoing support for any questions or concerns'
        }
      ]
    }
  ],
  totalTime: 'P12W',
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Experienced Design Consultants'
    },
    {
      '@type': 'HowToTool',
      name: 'Professional Project Managers'
    },
    {
      '@type': 'HowToTool',
      name: 'Skilled Construction Teams'
    }
  ]
};

const YourJourneySchema = () => {
  // Use useMemo to prevent unnecessary re-renders of the JSON-LD
  const schemaMarkup = useMemo(() => {
    return JSON.stringify(yourJourneySchema);
  }, []);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaMarkup }}
    />
  );
};

export default YourJourneySchema;
