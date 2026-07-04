import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import AppShowcase from "./sections/AppShowcase";
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
        <Features />
        <AppShowcase />
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
