import { useState, useEffect } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggleButton from '../theme/ThemeToggleButton';

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on homepage, navigate to homepage first
    if (currentPath !== '/') {
      navigate({ to: '/' });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'academic-tools', label: 'Academic Tools' },
    { id: 'career-roadmap', label: 'Career Roadmap' },
    { id: 'resume-placement', label: 'Resume & Placement' },
    { id: 'daily-utilities', label: 'Utilities' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 md:gap-3 font-heading font-bold text-base md:text-xl text-primary hover:text-primary/80 transition-colors"
          >
            <div className="logo-container h-10 w-10 md:h-12 md:w-12 rounded-2xl overflow-hidden flex items-center justify-center">
              {!logoError ? (
                <img 
                  src="/assets/generated/site-logo.dim_256x256.png" 
                  alt="Student Hub logo" 
                  className="h-full w-full object-contain premium-logo"
                  loading="eager"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                  <GraduationCap className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
              )}
            </div>
            <span className="hidden sm:inline">Student Hub</span>
            <span className="sm:hidden">Student Hub</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggleButton />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
