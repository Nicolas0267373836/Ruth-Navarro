import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { CLINIC_DATA } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Tratamientos', path: '/tratamientos' },
    { name: 'Casos', path: '/casos' },
    { name: 'Sobre mí', path: '/sobre-la-doctora' },
    { name: 'Agenda', path: '/agenda' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFBFE]/95 backdrop-blur-md border-b border-[#D9C9F4]/40 shadow-[0_4px_24px_rgba(76,46,120,0.04)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Tipográfico Limpio */}
          <Link
            to="/"
            className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7654B3] rounded-lg py-1"
            aria-label="Dra. Ruth Esther Navarro - Ir a inicio"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#292735] group-hover:text-[#4C2E78] transition-colors">
              Dra. Ruth Esther Navarro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium transition-all rounded-full relative ${
                    active
                      ? 'text-[#4C2E78] bg-[#F6F2FD]'
                      : 'text-[#62657D] hover:text-[#292735] hover:bg-[#F6F2FD]/60'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7654B3]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Único y Elegante */}
          <div className="hidden md:flex items-center">
            <Link
              to="/agenda"
              id="header-cta-agenda"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] active:scale-[0.98] transition-all shadow-sm shadow-[#7654B3]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C2E78]"
            >
              Agendar cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#292735] hover:bg-[#F6F2FD] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7654B3]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#4C2E78]" /> : <Menu className="w-6 h-6 text-[#292735]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-panel"
          className="md:hidden border-b border-[#D9C9F4]/60 bg-[#FCFBFE] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#F6F2FD] text-[#4C2E78] font-semibold'
                      : 'text-[#62657D] hover:bg-[#F6F2FD]/50 hover:text-[#292735]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#7654B3]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D9C9F4]/40 flex flex-col gap-2">
            <Link
              to="/agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors"
            >
              Agendar cita
            </Link>

            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-[#4C2E78] bg-[#F6F2FD] border border-[#D9C9F4]/60 hover:bg-[#D9C9F4]/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#7654B3]" />
              <span>WhatsApp directo (+1 829-765-9989)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
