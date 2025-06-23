import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Last updated: June 23, 2025
        </p>

        <Separator className="my-8" />

        <div className="prose prose-lg dark:prose-invert">
          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <h2>Acknowledgement</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>

          <h2>Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>

          <h2>Governing Law</h2>
          <p>
            The laws of the United Kingdom, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us at <a href="mailto:contact@extendia.co.uk">contact@extendia.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
