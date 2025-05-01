import HeroContent from "@/components/common/HeroContent";
import Button from '../../common/Button';

export default function HeroSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left mt-34 mb-3">
                <HeroContent
                    className="max-w-3xl"
                    subtitle="Revolutionizing Digital Horizons"
                    title={<h1>Blending AI, VR, & Creativity to Shape Tomorrow</h1>}
                    description="Transform your brand with the power of intelligent solutions and immersive experiences. HumbleHackers delivers future-ready strategies for unparalleled digital success."
                />
                <Button href="/#" variant="primary" className="mt-4">
                    Get Started
                </Button>
            </div>
        </section>
    );
}
