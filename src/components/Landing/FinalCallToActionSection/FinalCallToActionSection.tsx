import GeneralContent from "@/components/common/GeneralContent";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function FinalCallToActionSection() {
    return (
        <section className="bg-purple-900 text-white bg-cover bg-center bg-[url(/landing/final-cta-bg.png)]">
            <div className="backdrop-brightness-[30%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    {/* Image Section */}
                    <div className="relative w-full h-64 sm:h-80 lg:h-120 bg-cover bg-center bg-[url(/landing/footer-cta.jpg)]"></div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center items-start">
                        <GeneralContent
                            subtitle="READY TO START?"
                            title="Partner with Us for Digital Success Today!"
                            description="Connect with our team to discover how we can help elevate your brand through innovative marketing strategies and cutting-edge technology."
                            subtitleClass="text-sm sm:text-base uppercase tracking-wider font-semibold"
                            titleClass="text-2xl sm:text-3xl md:text-4xl font-bold mt-2"
                            descriptionClass="mt-4 text-base sm:text-lg md:text-xl text-gray-200"
                        />
                        <Button href="/#" variant="primary" className="mt-5">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
