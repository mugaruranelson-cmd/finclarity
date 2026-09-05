import React from 'react';
import { CheckCircle2, Lock, ShieldCheck, Zap, Headphones, BarChart2 } from 'lucide-react';

export default function WhyFinclarity({ onNavigate }) {
  const strengths = [
    { title: "QuickBooks-Focused Expertise", desc: "Deep operational focus on QuickBooks setup, transaction entry, ledger maintenance, and error troubleshooting." },
    { title: "Accurate & Organized Records", desc: "Meticulous categorization ensures your books reflect exact bank statements without missing receipts or double entries." },
    { title: "Confidential Data Handling", desc: "Strict privacy and non-disclosure standards to keep your company's sensitive financial data safe and secure." },
    { title: "Flexible Engagement Models", desc: "Choose weekly, monthly, or periodic freelance arrangements tailored strictly to your operational workload." },
    { title: "Clear & Timely Reporting", desc: "Understandable P&L, balance sheets, and cash flow reports delivered reliably on schedule." },
    { title: "Practical Business Focus", desc: "We focus on real business outcomes and cash visibility rather than overwhelming you with dry accounting jargon." },
    { title: "Reconciliation Accuracy", desc: "Rigorous monthly bank and mobile money reconciliations so your records balance down to the exact cent." }
  ];

  return (
    <section id="about" style={{ padding: '5.5rem 0', background: 'var(--bg-slate)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column */}
          <div>
            <span className="badge badge-emerald">Trust & Credibility</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--primary-navy)',
              margin: '0.75rem 0 1.25rem 0'
            }}>
              Why Businesses Choose FINCLARITY
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              FINCLARITY HUB SERVICES was created to bridge the gap between expensive accounting firms and disorganized manual bookkeeping. We deliver accurate numbers so you can focus on growing your core business.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {strengths.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--accent-emerald-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Confidentiality & Trust Card */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--accent-emerald) 100%)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                <Lock size={32} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                Strict Confidentiality & Privacy
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We understand that your financial records are sensitive. Every business engagement with FINCLARITY is covered by standard non-disclosure confidentiality principles. Your documents, bank statements, and reports remain 100% private.
              </p>

              <div style={{
                padding: '1rem 1.25rem',
                background: 'var(--bg-slate)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <ShieldCheck size={24} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                  Organized. Reliable. Confidential Financial Support.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
