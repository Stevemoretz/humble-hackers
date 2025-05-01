import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Landing/Header/HeroSection";
import CallToActionSection from "@/components/Landing/CallToActionSection/CallToActionSection";
import FinalCallToActionSection from "@/components/Landing/FinalCallToActionSection/FinalCallToActionSection";
import GallerySection from "@/components/Landing/GallerySection/GallerySection";
import ServicesSection from "@/components/Landing/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/Landing/TestimonialsSection/TestimonialsSection";
import WhyChooseUsSection from "@/components/Landing/WhyChooseUsSection/WhyChooseUsSection";
import AboutSection from '../components/Landing/AboutSection/AboutSection';
import Header from '../components/Header/Header';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header hero={<HeroSection />}/>
            <main>
                <AboutSection />
                <ServicesSection />
                <CallToActionSection/>
                <WhyChooseUsSection/>
                <GallerySection/>
                <TestimonialsSection/>
                <FinalCallToActionSection/>
            </main>
            <Footer />
        </div>
    );
}
