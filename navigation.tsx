import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');
      
      if (navMenu && hamburger && 
          !navMenu.contains(event.target as Node) && 
          !hamburger.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Pastor's profile picture */}
      <img 
        src="https://images.pexels.com/photos/33145701/pexels-photo-33145701.jpeg" 
        alt="pastor siyaya" 
        className="profile-pic"
      />

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`} id="navMenu">
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About Us</a>
        <a onClick={() => scrollToSection('services')}>Services</a>
        <a onClick={() => scrollToSection('events')}>Events</a>
        <a onClick={() => scrollToSection('ministries')}>Ministries</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
    </>
  );
}
