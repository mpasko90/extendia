import Marquee from "../ui/marquee";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Sarah Thompson",
    role: "Homeowner in South West London",
    content: "Extendia transformed our loft into a beautiful living space. Their attention to detail and professionalism was outstanding.",
    rating: 5,
  },
  {
    id: "2",
    author: "James Miller",
    role: "Property Developer",
    content: "The team's expertise in house extensions is unmatched. They delivered our project on time and within budget.",
    rating: 5,
  },
  {
    id: "3",
    author: "Emma Davis",
    role: "Residential Client",
    content: "Exceptional service from start to finish. Our new patio has completely transformed our outdoor space.",
    rating: 5,
  },
  {
    id: "4",
    author: "Michael Roberts",
    role: "Home Renovation Client",
    content: "Professional, reliable, and incredibly skilled. The loft conversion exceeded our expectations.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-center text-lg text-gray-400">
            Read testimonials from our satisfied clients across South West London
          </p>
        </div>
      </div>
      
      <div className="relative mt-12">
        <Marquee
          pauseOnHover
          className="py-8"
          reverse={false}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-4 flex w-[350px] flex-col rounded-xl bg-gray-900 p-6 shadow-xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.934l-6.18 3.246 1.18-6.874L.001 7.466l6.902-1.002L10 0l3.097 6.464 6.902 1.002-4.999 4.84 1.18 6.874z"
                    />
                  </svg>
                ))}
              </div>
              <p className="flex-grow text-gray-300">{testimonial.content}</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
