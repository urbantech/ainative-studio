import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';
import { ButtonCustom } from '@/components/ui/button-custom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Products', path: '/products' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Enterprise', path: '/enterprise' },
  { name: 'Developer Resources', path: '/dev-resources' },
  { name: 'Download', path: '/download' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/90 dark:bg-background/80 backdrop-blur-md shadow-sm border-border'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-1"
        >
          <span className="text-[#FF6B00]">⚡</span>AI
          <span className="text-primary">Native</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/*<ButtonCustom
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ButtonCustom>*/}

          {['/login', '/signup'].includes(location.pathname) ? (
            <Link to="/">
              <ButtonCustom variant="primary">Back to Home</ButtonCustom>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <ButtonCustom variant="outline">Sign In</ButtonCustom>
              </Link>
              <a
                href="https://calendly.com/seedlingstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonCustom variant="primary">Book a Call</ButtonCustom>
              </a>
            </>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          {/*<ButtonCustom
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ButtonCustom>*/}
          <button
            className="text-muted-foreground hover:text-foreground transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background animate-in slide-in-from-top p-6 flex flex-col gap-6 md:hidden">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-[#FF6B00]">⚡</span>AI
              <span className="text-primary">Native</span>
            </Link>
            <button
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <ButtonCustom variant="outline" className="w-full">
                Sign In
              </ButtonCustom>
            </Link>
            <a
              href="https://calendly.com/seedlingstudio/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ButtonCustom variant="primary" className="w-full">
                Book a Call
              </ButtonCustom>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
