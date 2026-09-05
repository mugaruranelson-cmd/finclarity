import React from 'react';
import { Check, Star, ArrowRight, ShieldAlert } from 'lucide-react';

export default function PackagesSection({ onNavigate }) {
  const packages = [
    {
      name: "BASIC",
      target: "Freelancers & micro businesses",
      tagline: "Essential monthly bookkeeping & account reconciliation.",
      features: [
        "Income & expense transaction recording",
        "Monthly bank account reconciliation",
        "Basic ledger updates",
        "Quarterly financial summary",
        "Email support"
      ],
      ctaText: "Get Started",
      featured: false
    },
    {
      name: "STANDARD",
      target: "Growing small businesses",
      tagline: "Comprehensive ongoing bookkeeping & report delivery.",
      features: [
        "Full QuickBooks transaction recording",
        "Monthly bank & credit reconciliations",
        "Monthly Profit & Loss statements",
        "Monthly Balance Sheet generation",
        "AR & AP tracking overview",
        "Dedicated bookkeeping support"
      ],
      ctaText: "Get Started",
      featured: true,
      badgeText: "Most Popular"
    },
    {
      name: "PROFESSIONAL",
      target: "Established businesses & NGOs",
      tagline: "Full-service financial record-keeping & budget tracking.",
      features: [
        "Complete multi-account bookkeeping",
        "Monthly P&L, Balance Sheet & Cash Flow",
        "Budget monitoring & variance tracking",
        "NGO grant / project cost allocation",
        "Accounts Payable & Receivable management",
        "Priority consultation & review meetings"
      ],
      ctaText: "Talk to FINCLARITY",
      featured: false
    },
    {
      name: "CATCH-UP / CLEANUP",
      target: "Businesses behind on their books",
      tagline: "One-time or periodic historical data restoration.",
      features: [
        "In-depth QuickBooks data review",
        "Classification error correction",
        "Reconciliation backlog resolution",
        "Historical transaction entry",
        "Complete books restoration up to date"
      ],
      ctaText: "Get My Books Up to Date",
      featured: false,
      isSpecial: true
    }
  ];

  return (
    <section id="packages" style={{ padding: '5.5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-gold">Transparent Service Structure</span>
          <h2>Tailored Bookkeeping Packages</h2>
          <p>
            Flexible support models designed around your transaction volume, business structure, and reporting requirements.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem'
        }}>
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 1.75rem',
                background: pkg.featured ? 'var(--primary-navy)' : (pkg.isSpecial ? '#FFFBEB' : 'white'),
                color: pkg.featured ? 'white' : 'var(--text-dark)',
                border: pkg.featured
                  ? '2px solid var(--accent-emerald)'
                  : (pkg.isSpecial ? '1px solid #FCD34D' : '1px solid var(--border-light)'),
                boxShadow: pkg.featured ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              {pkg.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '1.5rem',
                  background: 'var(--accent-emerald)',
                  color: 'white',
                  padding: '0.25rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Star size={12} fill="white" /> {pkg.badgeText}
                </div>
              )}

              {pkg.isSpecial && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '1.5rem',
                  background: 'var(--brand-gold)',
                  color: 'white',
                  padding: '0.25rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Specialized Catch-Up
                </div>
              )}

              <div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: pkg.featured ? '#38BDF8' : 'var(--accent-emerald)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  {pkg.target}
                </span>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  margin: '0.4rem 0 0.6rem 0',
                  color: pkg.featured ? 'white' : 'var(--primary-navy)'
                }}>
                  {pkg.name}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: pkg.featured ? '#94A3B8' : 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5
                }}>
                  {pkg.tagline}
                </p>

                <div style={{
                  padding: '1rem',
                  background: pkg.featured ? 'rgba(255, 255, 255, 0.06)' : 'var(--bg-slate)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: pkg.featured ? 'white' : 'var(--primary-navy)'
                }}>
                  Custom Quote Based on Volume
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem' }}>
                      <Check size={16} color={pkg.featured ? '#10B981' : 'var(--accent-emerald)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%' }}
              >
                {pkg.ctaText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Custom package notice */}
        <div style={{
          textAlign: 'center',
          padding: '1.25rem',
          background: 'var(--bg-slate)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-light)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            💡 <strong>Need a tailored engagement?</strong> Custom packages are available based on specific transaction volume, multiple entities, and specialized NGO reporting requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
