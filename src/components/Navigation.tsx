import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about', 'skills', 'achievements', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            CG
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" isActive={activeSection === 'home'}>Home</NavLink>
            <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
            <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
            <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
            <NavLink href="#achievements" isActive={activeSection === 'achievements'}>Achievements</NavLink>
            <NavLink href="#testimonials" isActive={activeSection === 'testimonials'}>Testimonials</NavLink>
            <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home" isActive={activeSection === 'home'} onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#projects" isActive={activeSection === 'projects'} onClick={() => setIsMobileMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#about" isActive={activeSection === 'about'} onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#skills" isActive={activeSection === 'skills'} onClick={() => setIsMobileMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#achievements" isActive={activeSection === 'achievements'} onClick={() => setIsMobileMenuOpen(false)}>Achievements</MobileNavLink>
            <MobileNavLink href="#testimonials" isActive={activeSection === 'testimonials'} onClick={() => setIsMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#contact" isActive={activeSection === 'contact'} onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <a 
    href={href}
    className={`transition-colors ${
      isActive 
        ? 'text-purple-400 font-medium' 
        : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children,
  isActive,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <a
    href={href}
    className={`block px-3 py-2 text-base font-medium rounded-md ${
      isActive
        ? 'text-purple-400 bg-purple-500/10'
        : 'text-gray-300 hover:text-white hover:bg-gray-900'
    }`}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navigation;