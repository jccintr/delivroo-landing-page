import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Segments from "./sections/Segments";
import Features from "./sections/Features";
import AdminShowcase from "./sections/AdminShowcase";
import PrintSignature from "./sections/PrintSignature";
import Pricing from "./sections/Pricing";
import ContactForm from "./sections/ContactForm";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Segments />
        <Features />
        <AdminShowcase />
        <PrintSignature />
        <Pricing />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
