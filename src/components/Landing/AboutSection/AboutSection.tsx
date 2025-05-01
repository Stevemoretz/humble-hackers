import GeneralContent from "@/components/common/GeneralContent";
import Image from 'next/image';
import HeroContent from "@/components/common/HeroContent";
import Button from "@/components/common/Button";

export default function AboutSection() {
    return (
        <section className="bg-purple-50">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-x-18 gap-y-2">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/about-us.png"
                            alt="Team working together"
                            width={600}
                            height={400}
                            className="w-full h-64 sm:h-80 md:h-96 object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
                        <GeneralContent
                            className="text-black"
                            subtitle="WHO ARE WE"
                            title="Not Your Average Tech Team"
                            description="We’re a dynamic, passionate team with zero ego and maximum hustle, always diving into the latest trends to turn bold ideas into smarter solutions that work for everyone."
                        />
                        <Button href="/#" variant="primary" className="mt-6">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
