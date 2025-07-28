import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function HeroSection() {
  return (
    <header id="home" className="church-header">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">New Covenant Mandate Church International</h1>
      <h2 className="text-xl md:text-2xl mb-6 text-blue-200">This Is New Covenant In My Blood</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Welcome to our church family! We believe in creating a warm, welcoming environment where everyone can grow in their faith journey together. Join us as we serve God and our community with love and compassion.
      </p>
      
      <div className="social-icons">
        <a href="https://www.facebook.com/share/1L4PCUguK1/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook size={24} />
        </a>
        <a href="[https://www.instagram.com/ncmci_youth?igsh=bm9rOW82N2NienQw&utm_source=qr]" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={24} />
        </a>
        <a href="[YOUR_YOUTUBE_URL]" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube size={24} />
        </a>
        <a href="[YOUR_TWITTER_URL]" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter size={24} />
        </a>
      </div>
    </header>
  );
}
