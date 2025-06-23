import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Last updated: June 23, 2025
        </p>

        <Separator className="my-8" />

        <div className="prose prose-lg dark:prose-invert">
          <p>
            Extendia Ltd. ("us", "we", or "our") operates the https://www.extendia.co.uk website (the "Service").
          </p>
          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, phone number, and any details you provide regarding your project.
          </p>

          <h2>Use of Data</h2>
          <p>
            Extendia Ltd. uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@extendia.co.uk">contact@extendia.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
