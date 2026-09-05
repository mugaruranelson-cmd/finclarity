import React from 'react';
import { MessageSquare, SlidersHorizontal, CheckSquare, FileText, Repeat, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onNavigate }) {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We discuss your business, your current bookkeeping situation, pain points, and reporting needs.",
      icon: <MessageSquare size={24} color="var(--accent-emerald)" />
    },
    {
      num: "02",
      title: "Review & Setup",
      desc: "We review existing records or establish a clean, customized QuickBooks Chart of Accounts.",
      icon: <SlidersHorizontal size={24} color="var(--brand-gold)" />
    },
    {
      num: "03",
      title: "Record & Reconcile",
      desc: "Transactions are accurately recorded, categorized, and reconciled against bank & mobile money statements.",
      icon: <CheckSquare size={24} color="var(--primary-navy)" />
    },
    {
      num: "04",
      title: "Financial Reports",
      desc: "You receive straightforward Profit & Loss, Balance Sheet, and Cash Flow reports.",
      icon: <FileText size={24} color="#2563EB" />
    },
    {
      num: "05",
      title: "Ongoing Support",
      desc: "Choose weekly, monthly, or periodic bookkeeping support aligned with your operational pace.",
      icon: <Repeat size={24} color="#059669" />
    }
  ];

  return (
    <section id="howitworks" style={{ padding: '5.5rem 0', background: 'var(--bg-slate)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Simple 5-Step Process</span>
          <h2>Getting Your Books in Order Is Simple.</h2>
          <p>
            We take the complexity out of financial management with a clear, step-by-step onboarding process.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <span style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--accent-emerald)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {step.num}
                  </span>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-slate)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center'
                  }}>
                    {step.icon}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-primary"
            style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}
          >
            Start Step 01 — Free Consultation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
