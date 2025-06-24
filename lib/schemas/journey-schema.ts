import { HowTo, WithContext } from 'schema-dts';

// Enhanced schema with improved sequential thinking structure for AI search
export const yourJourneySchema: WithContext<HowTo> = {
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
          text: 'Submit and manage planning applications'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Cost Planning & Approval',
      text: 'We provide a detailed, fixed-price quote for your project, including a comprehensive breakdown of costs. Once approved, we can begin scheduling the work.',
      url: 'https://extendia.co.uk/your-journey#step-3',
      image: 'https://extendia.co.uk/images/journey/cost-planning.jpg',
      position: 3,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Receive a detailed, fixed-price quotation'
        },
        {
          '@type': 'HowToDirection',
          text: 'Review project specifications and materials'
        },
        {
          '@type': 'HowToDirection',
          text: 'Approve final project scope and budget'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Construction & Project Management',
      text: 'Our experienced team manages every aspect of the construction process, providing regular updates and ensuring minimal disruption to your daily life.',
      url: 'https://extendia.co.uk/your-journey#step-4',
      image: 'https://extendia.co.uk/images/journey/construction.jpg',
      position: 4,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Begin construction with our expert team'
        },
        {
          '@type': 'HowToDirection',
          text: 'Receive regular progress updates'
        },
        {
          '@type': 'HowToDirection',
          text: 'Quality checks at key construction milestones'
        }
      ]
    },
    {
      '@type': 'HowToStep',
      name: 'Completion & Handover',
      text: 'Final inspections ensure everything meets our high standards. We provide all necessary documentation and warranties before handing over your beautifully finished space.',
      url: 'https://extendia.co.uk/your-journey#step-5',
      image: 'https://extendia.co.uk/images/journey/completion.jpg',
      position: 5,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: 'Final quality inspections and sign-off'
        },
        {
          '@type': 'HowToDirection',
          text: 'Documentation and warranty handover'
        },
        {
          '@type': 'HowToDirection',
          text: 'Post-project support and aftercare'
        }
      ]
    }
  ]
};
