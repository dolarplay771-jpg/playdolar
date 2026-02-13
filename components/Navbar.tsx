import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Modos', href: '#modos' },
  { label: 'Benefícios', href: '#beneficios' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-dark-950/80 backdrop-blur-xl border-white/5 py-4' 
            : 'bg-transparent border-transparent py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Text Only */}
          <div className="flex items-center gap-3 group cursor-pointer z-50">
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-gold-200 transition-colors">
              Play<span className="text-gold-gradient">Dolar</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 bg-white/5 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://playdolar.com.br/login" className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors">Entrar</a>
            <Button 
              variant="primary" 
              className="px-8 py-2.5 text-xs font-bold uppercase tracking-wider"
              href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
            >
              Começar
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2 relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-gold-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            {isMobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Decor */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="flex-1 flex flex-col justify-center px-8 pt-20">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-4xl font-bold text-white/90 hover:text-gold-400 transition-all duration-300 flex items-center justify-between group border-b border-white/5 pb-4 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ArrowRight size={24} className="text-gold-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>

        <div className="p-8 pb-12 bg-gradient-to-t from-black via-dark-900 to-transparent">
          <Button 
            variant="primary" 
            className="w-full py-5 text-base shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-4"
            href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
          >
            Começar Agora
          </Button>
          <Button 
            variant="outline" 
            className="w-full py-5 border-white/10 text-white/60"
            href="https://playdolar.com.br/register?affiliate=AQ5YLY5Y"
          >
            Área do Cliente
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
