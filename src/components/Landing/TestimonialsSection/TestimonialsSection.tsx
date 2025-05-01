import GeneralContent from "@/components/common/GeneralContent";
import TestimonialCard from "@/components/Landing/TestimonialsSection/TestimonialCard";

// Define the testimonials data array
const testimonials = [
    {
        testimonial: "The Humble Hacker transformed our online presence! Their innovative solutions and dedicated team took our brand to new heights. We've seen incredible growth and engagement since partnering with them.",
        clientName: "John Smith",
        avatarSrc: "/avatars/john-smith.png",
    },
    {
        testimonial: "Working with The Humble Hacker was a game-changer for us. Their creativity and use of technology brought our vision to life, making our brand more relevant in the digital space.",
        clientName: "Mike Johnson",
        avatarSrc: "/avatars/mike-johnson.png",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-10 sm:mb-12 lg:mb-16">
                    <GeneralContent
                        className="text-black"
                        subtitle="CLIENT FEEDBACK"
                        title="What Our Clients Are Saying"
                        subtitleClass="text-sm sm:text-base uppercase tracking-wider text-gray-800 font-semibold"
                        titleClass="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    />
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial.testimonial}
                            clientName={testimonial.clientName}
                            avatarSrc={testimonial.avatarSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
