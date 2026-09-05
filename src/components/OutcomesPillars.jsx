import React from 'react';
import { Layers, Eye, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function OutcomesPillars({ onNavigate }) {
  const pillars = [
    {
      icon: <Layers size={32} color="white" />,
      title: "Stay Organized",
      desc: "Keep financial records structured, classified, and up to date without last-minute panic or lost invoices.",
      color: "linear-gradient(135deg, #0B192C 0%, #1E293B 100%)"
    },
    {
      icon: <Eye size={32} color="white" />,
      title: "See Clearly",
      desc: "Understand exactly where your cash flow is going, who owes you money, and how profitable your business really is.",
      color: "linear-gradient(135deg, #059669 0%, #047857 100%)"
    },
    {
      icon: <Clock size={32} color="white" />,
      title: "Save Time",
      desc: "Reclaim dozens of hours every month. Let our bookkeeping specialists handle the record-keeping while you focus on growth.",
      color: "linear-gradient(135deg, #D97706 0%, #B45309 100%)"
    },
    {
      icon: <Award size={32} color="white" />,
      title: "Make Better Decisions",
      desc: "Base your operational and strategic business decisions on accurate, reliable financial reports—not educated guesses.",
      color: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"
    }
  ];

  return (
    <section style={{ padding: '5.5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-gold">Business Outcomes</span>
          <h2>Know Your Numbers. Run Your Business With Confidence.</h2>
          <p>
            Bookkeeping isn't just about record keeping—it's the foundation of every sound business decision. Here is what working with FINCLARITY delivers:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 1.75rem',
                background: 'white',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-smooth)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-md)',
                background: p.color,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)'
              }}>
                {p.icon}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                {p.title}
              </h3>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          background: 'var(--accent-emerald-subtle)',
          padding: '2rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(5, 150, 105, 0.2)'
        }}>
          <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.5rem' }}>
            Ready to transform your financial record-keeping?
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Schedule your initial consultation with FINCLARITY HUB SERVICES today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <CheckCircle2 size={18} /> Request Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
