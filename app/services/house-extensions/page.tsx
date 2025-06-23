import { LocalBusiness, WithContext } from "schema-dts";

const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Extendia - House Extensions",
  "image": "https://www.extendia.co.uk/images/house-extension-service.jpg",
  "@id": "https://www.extendia.co.uk/services/house-extensions",
  "url": "https://www.extendia.co.uk/services/house-extensions",
  "telephone": "+44-203-555-5555",
  "priceRange": "£££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 High Street",
    "addressLocality": "Kingston upon Thames",
    "addressRegion": "London",
    "postalCode": "KT1 1EE",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.4083,
    "longitude": -0.3054
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/extendia",
    "https://www.twitter.com/extendia",
    "https://www.instagram.com/extendia"
  ]
};

export default function HouseExtensionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">House Extensions</h1>
        <p className="mt-4">We specialize in creating beautiful and functional house extensions in South West London. Contact us to learn more.</p>
      </div>
    </>
  );
}
