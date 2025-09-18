import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Scale } from 'lucide-react';
import logo from '@/assets/logo-cabinet.jpg';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="hover-lift">
            <div className="w-12 h-12 relative">
              <img 
                src={logo} 
                alt="Cabinet Lakhoua" 
                className="w-full h-full object-cover rounded-full drop-shadow-lg border-2 border-yellow-600/30" 
              />
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
                    ? 'text-yellow-600'
                    : 'text-white hover:text-yellow-500'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
                Consultation Gratuite
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-yellow-600/20 transition-colors text-white"
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
          <div className="md:hidden py-4 border-t border-yellow-600/20 animate-fade-in-up bg-black/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                    isActive(item.path)
                      ? 'text-yellow-600 bg-yellow-600/10'
                      : 'text-white hover:text-yellow-500 hover:bg-yellow-600/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold w-full">
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