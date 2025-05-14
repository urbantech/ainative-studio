import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';
import { ButtonCustom } from '@/components/ui/button-custom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
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

  const navigation = [
    { name: 'Products', path: '/products' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'Developer Resources', path: '/dev-resources' },
    { name: 'Download', path: '/download' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="text-[#FF6B00]">⚡</span>AI<span className="text-primary">Native</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-neutral-muted hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <ButtonCustom
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </ButtonCustom>
            {location.pathname === '/login' || location.pathname === '/signup' ? (
              <Link to="/">
                <ButtonCustom variant="primary">Back to Home</ButtonCustom>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <ButtonCustom variant="outline">Sign In</ButtonCustom>
                </Link>
                <Link to="/signup">
                  <ButtonCustom variant="primary">Get Started FREE</ButtonCustom>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ButtonCustom
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </ButtonCustom>
          <button
            className="text-neutral-muted dark:text-gray-200 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed w-full h-screen bg-white dark:bg-gray-900 z-40 p-6 space-y-6 md:hidden animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-6 pt-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-muted hover:text-primary dark:text-gray-200 dark:hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <ButtonCustom variant="outline" className="w-full">
                  Sign In
                </ButtonCustom>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <ButtonCustom variant="primary" className="w-full">
                  Get Started FREE
                </ButtonCustom>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;