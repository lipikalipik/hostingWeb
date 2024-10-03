import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import Faq from "./components/Faq";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/TestimonialsSection";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
      </Routes>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
