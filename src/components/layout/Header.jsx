import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil',      href: '#home',       id: 'home' },
    { name: 'Compétences',  href: '#skills',     id: 'skills' },
    { name: 'Projets',      href: '#projects',   id: 'projects' },
    { name: 'Parcours',     href: '#experience', id: 'experience' },
    { name: 'Contact',      href: '#contact',    id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#EDE6DC] shadow-sm'
            : 'bg-transparent border-b border-[#EDE6DC]'
        }`}
        style={{ height: scrolled ? '60px' : '72px' }}
      >
        <div className="container mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-[20px] font-bold tracking-wide text-[#e8eaee] no-underline"
          >
            &lt;<span style={{ color: '#3b82f6' }}>AD</span>/&gt;
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`text-[11px] uppercase tracking-[2px] no-underline transition-colors duration-200 ${
                  active === item.id
                    ? 'text-[#3b82f6]'  /* ← BLEU au lieu de beige/gold */
                    : 'text-[#5C5752] hover:text-[#2C2825]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#5C5752] hover:text-[#2C2825] transition-colors bg-transparent border-none cursor-pointer text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: '#FCF9F5' }}>
          <button
            className="absolute top-6 right-6 text-[#5C5752] hover:text-[#2C2825] bg-transparent border-none text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => { setActive(item.id); setIsOpen(false); }}
              className="font-display text-[32px] font-semibold text-[#2C2825] no-underline hover:text-[#3b82f6] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;