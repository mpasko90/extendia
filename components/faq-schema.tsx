import { FAQPage, WithContext } from "schema-dts";

export const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the first step to getting a house extension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first step is our initial consultation. We'll visit your property to discuss your ideas, assess the space, and provide you with an initial estimate. This is a no-obligation meeting to understand your vision and how we can help."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical house extension take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical house extension can take anywhere from 3 to 6 months from start to finish. This timeline depends on the size and complexity of the project, planning permission requirements, and other factors. We provide a detailed project timeline after the design phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need planning permission for my extension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Whether you need planning permission depends on the size and location of your proposed extension. Many extensions fall under 'Permitted Development' rights, which means you don't need full planning permission. We will advise you on this during our initial consultation and can manage the entire planning process for you."
      }
    },
    {
        "@type": "Question",
        "name": "How much does a house extension cost?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a house extension varies significantly based on the size, materials, and complexity of the design. On average, you can expect to invest between £30,000 and £100,000 or more. We provide a detailed, fixed-price quote after the design and specifications are finalized, so you know the exact cost before we begin."
        }
    },
    {
        "@type": "Question",
        "name": "Can you help with the design and architectural drawings?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. We offer a complete design-and-build service. Our team includes experienced designers and architects who will work with you to create detailed drawings and 3D models of your new space, ensuring it meets your needs and complies with all regulations."
        }
    }
  ]
};
