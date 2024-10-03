import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import BlogSection from "../components/BlogSection";
import WhyUs from "../components/WhyUs";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const MainPage = () => {
  return (
    <>
      {/*  HeroSec */}
      <HeroSection />

      {/* Projects */}

      <ProjectSection />

      {/* Services */}

      <ServicesSection />

      {/* statsSection */}

      <StatsSection />

      {/* Blogs */}
      <BlogSection />

      {/* Why us */}
      <WhyUs />

      {/* Testimonials */}

      <TestimonialsSection />

      {/* Contact */}

      <ContactSection />
    </>
  );
};

export default MainPage;
