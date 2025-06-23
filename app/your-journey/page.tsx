import { Metadata } from 'next';
import YourJourneySchema from '@/components/your-journey-schema';

export const metadata: Metadata = {
  title: "Your Journey with Extendia - Our Process",
  description: "Discover our seamless 5-step journey to your dream home extension or loft conversion. From consultation to completion, we make the process clear, simple, and stress-free.",
  alternates: {
    canonical: '/your-journey',
  },
};

const YourJourneyPage = () => {
  return (
    <>
      <YourJourneySchema />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
          Your Journey with Extendia
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Discover our seamless 5-step journey to your dream home extension or loft conversion. From consultation to completion, we make the process clear, simple, and stress-free.
        </p>

        <div className="space-y-12">
          {/* Steps content will go here */}
        </div>
      </div>
    </>
  );
}

export default YourJourneyPage;
