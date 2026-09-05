import React from 'react';
import { BookOpen, RefreshCw, BarChart, Sparkles, Building2, Users, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onNavigate }) {
  const services = [
    {
      id: 'quickbooks',
      icon: <BookOpen size={28} color="var(--accent-emerald)" />,
      title: "QuickBooks Bookkeeping",
      desc: "Complete setup, ongoing maintenance, and general ledger management tailored for your business software.",
      bullets: [
        "QuickBooks setup & Chart of Accounts configuration",
        "Income and expense transaction recording",
        "Customer and vendor account management",
        "Invoices, sales receipts, Accounts Payable & Receivable",
        "General Ledger maintenance"
      ],
      ctaText: "Explore Bookkeeping"
    },
    {
      id: 'reconciliation',
      icon: <RefreshCw size={28} color="var(--brand-gold)" />,
      title: "Bank Reconciliation",
      desc: "Ensure every transaction in your bank account matches your books exactly with zero missing records.",
      bullets: [
        "Recording and categorizing bank transactions",
        "Monthly bank & credit reconciliations",
        "Identifying discrepancies and resolution",
        "Reviewing outstanding deposits & checks",
        "Multiple bank account support"
      ],
      ctaText: "Keep My Books Accurate"
    },
    {
      id: 'reporting',
      icon: <BarChart size={28} color="var(--primary-navy)" />,
      title: "Financial Reporting",
      desc: "Clear, decision-ready reports delivered on schedule to keep you fully aware of business performance.",
      bullets: [
        "Profit & Loss Statements (P&L)",
        "Balance Sheet & Cash Flow Reports",
        "Accounts Receivable & Payable Aging",
        "Budget vs. Actual performance analysis",
        "Customized management reports"
      ],
      ctaText: "Get Clearer Reports"
    },
    {
      id: 'cleanup',
      icon: <Sparkles size={28} color="#8B5CF6" />,
      title: "Bookkeeping Cleanup & Catch-Up",
      desc: "Specialized service for businesses behind on their books or dealing with messy, disorganized records.",
      bullets: [
        "Comprehensive QuickBooks data review",
        "Transaction re-classification & corrections",
        "Reconciliation backlog resolution",
        "Missing record organization",
        "Bringing historical books 100% up to date"
      ],
      ctaText: "Clean Up My Books"
    },
    {
      id: 'smallbusiness',
      icon: <Building2 size={28} color="#2563EB" />,
      title: "Small Business & Startup Support",
      desc: "Affordable, scalable financial record-keeping for entrepreneurs, freelancers, and growing ventures.",
      bullets: [
        "Daily/weekly expense monitoring",
        "Budget tracking & cash visibility",
        "Financial documentation organization",
        "Basic operational financial reports",
        "Scalable support as your revenue grows"
      ],
      ctaText: "Talk to FINCLARITY"
    },
    {
      id: 'ngo',
      icon: <Users size={28} color="#D97706" />,
      title: "NGO & Community Organization Support",
      desc: "Structured expenditure tracking, donor reporting support, and project allocation for non-profits.",
      bullets: [
        "Grant & project expenditure tracking",
        "Cost allocation across donor projects",
        "Budget monitoring & variance tracking",
        "Financial documentation compliance",
        "Clear donor-ready expense reporting"
      ],
      ctaText: "Discuss Your Organization's Needs"
    }
  ];

  return (
    <section id="services" style={{ padding: '5.5rem 0', background: 'var(--bg-slate)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Comprehensive Financial Support</span>
          <h2>Bookkeeping & Financial Support Built Around Your Business</h2>
          <p>
            Whether you need daily transaction recording, monthly reconciliations, or historical catch-up, FINCLARITY delivers accurate records you can trust.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 1.75rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                e.currentTarget.style.borderColor = 'var(--accent-emerald)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-slate)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {s.icon}
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {s.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                      <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'between' }}
              >
                {s.ctaText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
