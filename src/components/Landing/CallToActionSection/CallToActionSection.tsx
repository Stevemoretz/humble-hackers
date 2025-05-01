import GeneralContent from "@/components/common/GeneralContent";
import Button from "@/components/common/Button";

export default function CallToActionSection() {
    return (
        <section className="relative bg-cover bg-center bg-[url(/landing/call-to-action.png)]">
            <div className="backdrop-brightness-[30%] py-16 sm:py-18 lg:py-20 text-center">
                <GeneralContent
                    className="text-white"
                    subtitle="JOIN US"
                    title="Let’s Create Something Exceptional Together"
                    description="Discover how our services can transform your business ideas into reality."
                    descriptionClass="text-center mt-5"
                />
                <Button href="/#" variant="primary" className="mt-10">
                    Get Started
                </Button>
            </div>
        </section>
    );
}
