import React from 'react';
import { BarChart2, Mail, Phone, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--primary-navy)', color: 'white', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Col */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="brand-logo" style={{ color: 'white', marginBottom: '1rem', display: 'inline-flex' }}>
              <div className="brand-logo-icon">
                <BarChart2 size={24} />
              </div>
              <div>
                <span style={{ color: 'white', fontWeight: 800 }}>FIN</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>CLARITY</span>
                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '0.12em' }}>HUB SERVICES</span>
              </div>
            </a>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Bookkeeping made simple. Financial clarity made possible. Dedicated financial support for small businesses, startups, NGOs, and entrepreneurs across East Africa.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#10B981' }}>
              <ShieldCheck size={16} /> 100% Confidential & Reliable Records
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['home', 'services', 'whoweserve', 'howitworks', 'packages', 'about', 'faqs', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    style={{ color: '#94A3B8', fontSize: '0.9rem', textTransform: 'capitalize', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                  >
                    {item === 'whoweserve' ? 'Who We Serve' : (item === 'howitworks' ? 'How It Works' : item)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>Our Core Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#94A3B8' }}>
              <li>QuickBooks Bookkeeping</li>
              <li>Bank Reconciliation</li>
              <li>Financial Reporting (P&L, Cash Flow)</li>
              <li>Bookkeeping Cleanup & Catch-Up</li>
              <li>Small Business & Startup Support</li>
              <li>NGO Expenditure & Donor Tracking</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>Direct Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#94A3B8' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Email</span>
                <a href="mailto:hubf706@gmail.com" style={{ color: 'white', fontWeight: 600 }}>hubf706@gmail.com</a>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Kenya Line</span>
                <a href="https://wa.me/254719611029" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>+254 719 611 029</a>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Uganda Line</span>
                <a href="https://wa.me/256789873376" target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8', fontWeight: 600 }}>+256 789 873 376</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justify: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} FINCLARITY HUB SERVICES. All rights reserved.
          </div>
          <div>
            Accurate Books • Clear Reports • Better Business Decisions
          </div>
        </div>
      </div>
    </footer>
  );
}
