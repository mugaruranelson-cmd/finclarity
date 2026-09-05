import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight, BarChart2 } from 'lucide-react';

export default function Navbar({ onNavigate, activeTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'whoweserve', label: 'Who We Serve' },
    { id: 'howitworks', label: 'How It Works' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-sticky">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="brand-logo">
          <div className="brand-logo-icon">
            <BarChart2 size={24} />
          </div>
          <div>
            <span style={{ color: 'var(--primary-navy)', fontWeight: 800, letterSpacing: '-0.03em' }}>FIN</span>
            <span style={{ color: 'var(--accent-emerald)', fontWeight: 800, letterSpacing: '-0.03em' }}>CLARITY</span>
            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12em' }}>HUB SERVICES</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links nav-links-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="nav-links-desktop">
          <a
            href="https://wa.me/254719611029?text=Hello%20FINCLARITY%2C%20I'd%20like%20to%20discuss%20bookkeeping%20support%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.875rem' }}
          >
            <MessageSquare size={16} /> WhatsApp
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            Get Started <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{ display: 'flex', padding: '0.5rem', color: 'var(--primary-navy)' }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'white',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.6rem 0',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: activeTab === item.id ? 'var(--accent-emerald)' : 'var(--text-dark)',
                    borderBottom: '1px solid #F1F5F9'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Get Started
            </button>
            <a
              href="https://wa.me/254719611029?text=Hello%20FINCLARITY%2C%20I'd%20like%20to%20discuss%20bookkeeping%20support%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp (+254)
            </a>
            <a
              href="https://wa.me/256789873376?text=Hello%20FINCLARITY%2C%20I'd%20like%20to%20discuss%20bookkeeping%20support%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', backgroundColor: '#128C7E' }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp (+256)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
