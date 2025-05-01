import GeneralContent from "@/components/common/GeneralContent";
import ServiceCard from "@/components/Landing/ServicesSection/ServiceCard";

export default function ServicesSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left mb-10 sm:mb-12 lg:mb-16 max-w-2xl">
                    <GeneralContent
                        className="text-black"
                        subtitle="WHAT WE OFFER"
                        title="Your Go-To Hub For Futuristic Tech Insights And Innovations"
                        subtitleClass="text-sm sm:text-base uppercase tracking-wider text-gray-800 font-semibold"
                        titleClass="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    />
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ServiceCard
                        number="01."
                        title="Content Marketing Strategy"
                        description="We craft tailored content strategies powered by AI and data, designed to elevate your brand’s voice, engage your audience, and drive measurable results."
                    />
                    <ServiceCard
                        number="02."
                        title="AI /VR Solutions"
                        description="Harness the power of Artificial Intelligence and Virtual Reality to create immersive and impactful experiences that drive your business forward."
                    />
                    <ServiceCard
                        number="03."
                        title="Tech Research & Insights"
                        description="Stay ahead of the curve with our deep dives into the latest trends in AI, VR, and other emerging technologies with clear, actionable insights."
                    />
                    <ServiceCard
                        number="04."
                        title="App Development"
                        description="We don’t just talk about tech—we build it! Our apps are designed to harness the power of futuristic technologies and put it right in your hands."
                    />
                </div>
            </div>
        </section>
    );
}
