import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import EventsSection from "@/components/events-section";
import MinistriesSection from "@/components/ministries-section";
import NewsletterSection from "@/components/newsletter-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <MinistriesSection />
      <NewsletterSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="centered-section text-center">
        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400">
            &copy; 2024 Grace Community Church. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "For where two or three gather in my name, there am I with them." - Matthew 18:20
          </p>
        </div>
      </footer>
    </div>
  );
}
