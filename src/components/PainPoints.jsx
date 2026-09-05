import React from 'react';
import { Clock, EyeOff, AlertTriangle, FileSpreadsheet, ArrowRight } from 'lucide-react';

export default function PainPoints({ onNavigate }) {
  const problems = [
    {
      icon: <Clock size={28} color="var(--brand-gold)" />,
      title: "Books Behind?",
      desc: "Get your records updated, reconciled, and completely organized so you never fall behind again.",
      badge: "Catch-Up Support"
    },
    {
      icon: <EyeOff size={28} color="var(--accent-emerald)" />,
      title: "Not Sure Where Money Is Going?",
      desc: "Gain complete clarity over income and expenses through structured transaction categorization.",
      badge: "Financial Visibility"
    },
    {
      icon: <AlertTriangle size={28} color="#EF4444" />,
      title: "Bank Accounts Not Reconciling?",
      desc: "Identify discrepancies, missing entries, and errors to keep your records 100% accurate.",
      badge: "Reconciliation"
    },
    {
      icon: <FileSpreadsheet size={28} color="var(--primary-navy)" />,
      title: "Need Clear Financial Reports?",
      desc: "Receive straightforward P&L, Balance Sheet, and Cash Flow reports you can easily understand.",
      badge: "Executive Reporting"
    }
  ];

  return (
    <section style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Solve Your Bookkeeping Burden</span>
          <h2>Your Business Shouldn't Be Held Back by Your Books.</h2>
          <p>
            You started your business to serve customers and drive growth—not to spend late nights trying to balance spreadsheets or figure out QuickBooks.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {problems.map((p, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-slate)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                transition: 'all var(--transition-smooth)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--accent-emerald)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {p.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1E293B 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          color: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justify: 'space-between',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div>
            <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>The FINCLARITY Difference</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginTop: '0.25rem' }}>
              FINCLARITY turns bookkeeping from a burden into useful business information.
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem', whiteSpace: 'nowrap' }}
          >
            Get Started Today <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
