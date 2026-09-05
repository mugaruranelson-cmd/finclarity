import React from 'react';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SalesIsThisYou({ onNavigate }) {
  const quotes = [
    "I haven't updated my books in months and feel overwhelmed by the backlog.",
    "I don't know exactly how my business is performing or where our cash is going.",
    "My bank reconciliation statement never balances with QuickBooks.",
    "I need clear Profit & Loss reports for our stakeholders and bank.",
    "I'm spending late nights doing bookkeeping instead of driving sales.",
    "I need help tracking project expenditure and donor budget allocations.",
    "My business is growing rapidly and our financial organization is lagging behind."
  ];

  return (
    <section style={{ padding: '5.5rem 0', background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1E293B 100%)', color: 'white' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="badge badge-gold">Does This Sound Like Your Business?</span>
          <h2 style={{ color: 'white' }}>If Any of These Sound Familiar, Let's Talk.</h2>
          <p style={{ color: '#94A3B8' }}>
            You are not alone. Hundreds of entrepreneurs experience these exact challenges every single day before partnering with FINCLARITY.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {quotes.map((q, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Quote size={24} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.975rem', lineHeight: 1.6, color: '#E2E8F0', fontStyle: 'italic' }}>
                "{q}"
              </p>
            </div>
          ))}
        </div>

        {/* High Conversion Action Box */}
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #047857 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem' }}>
            Let's Get Your Books in Order
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#ECFDF5', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Book a consultation with FINCLARITY HUB SERVICES today and get a customized action plan for your financial record-keeping.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-secondary"
              style={{ padding: '1rem 2.25rem', fontSize: '1.05rem', backgroundColor: 'var(--primary-navy)' }}
            >
              Request a Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
