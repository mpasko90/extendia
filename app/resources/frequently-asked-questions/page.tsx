import { faqSchema } from "@/components/faq-schema";

export default function FAQPage() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
