import GeneralContent from "@/components/common/GeneralContent";
import WhyChooseUsCard from "@/components/Landing/WhyChooseUsSection/WhyChooseUsCard";

const reasons = [
    {
        number: "01",
        title: "Empowering Individuals",
        description: "We believe that everyone, from creators to curious tech enthusiasts, should have access to the power of AI and VR. Our mission is to make these technologies accessible and impactful for all.",
        icon: (
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
            </svg>
        ),
    },
    {
        number: "02",
        title: "Driving Creativity",
        description: "At HumbleHackers, we help push boundaries and turn the impossible into reality. Whether through innovative tools or bold ideas, we fuel creativity and redefine what's possible in tech.",
        icon: (
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7M5 5l2 2M5 19l2-2"/>
                <path fill="currentColor" d="M3 3h2v2H3V3zm16 16h2v2h-2v-2z"/>
            </svg>
        ),
    },
    {
        number: "03",
        title: "Building a Better Tomorrow",
        description: "The future is bright, and we’re committed to helping you stay ahead. By shaping digital innovations today, we ensure you’re ready for a smarter, more immersive tomorrow.",
        icon: (
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 7h18v2H3V7zm0 4h18v6H3v-6zm2 2v2h14v-2H5z"/>
            </svg>
        ),
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-10 sm:mb-12 lg:mb-16">
                    <GeneralContent
                        className="text-black"
                        subtitle="WHY CHOOSE US"
                        title={
                            <>
                                We're more than just cool tech. <br />
                                We help you <span className="bg-purple-800 text-white px-2 py-1">Navigate</span> and <span className="bg-purple-800 text-white px-2 py-1">Thrive</span> in the ever-evolving world of online innovation
                            </>
                        }
                        subtitleClass="text-sm sm:text-base uppercase tracking-wider text-gray-800 font-semibold"
                        titleClass="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    />
                </div>

                {/* Reasons */}
                <div className="space-y-2">
                    {reasons.map((reason, index) => (
                        <WhyChooseUsCard
                            key={index}
                            number={reason.number}
                            title={reason.title}
                            description={reason.description}
                            icon={reason.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
