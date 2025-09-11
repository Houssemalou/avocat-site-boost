import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Scale } from 'lucide-react';
import logo from '@/assets/logo-lakhoua.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 relative">
              <img src={logo} alt="Cabinet d'Avocat" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold hero-text">Cabinet Lakhoua</span>
              <span className="text-sm text-muted-foreground">مكتب لخوة للمحاماة</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.path)
                    ? 'gold-text'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-secondary-light rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="hero-button">
                Consultation Gratuite
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                    isActive(item.path)
                      ? 'gold-text bg-muted'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="hero-button w-full">
                    Consultation Gratuite
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;