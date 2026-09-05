import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection({ onNavigate }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What bookkeeping services does FINCLARITY provide?",
      a: "FINCLARITY provides comprehensive QuickBooks bookkeeping, bank and mobile account reconciliation, monthly financial reporting (P&L, Balance Sheet, Cash Flow), bookkeeping cleanup/catch-up, small business expense tracking, and NGO grant cost allocation."
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes! We specialize in supporting small businesses, sole proprietors, freelancers, startups, and growing enterprises that need organized financial records without hiring a full-time in-house bookkeeper."
    },
    {
      q: "Do you support NGOs and community organizations?",
      a: "Yes. We offer tailored financial support for non-profits and community organizations, including donor grant expenditure tracking, cost allocation, budget monitoring, and financial documentation organization."
    },
    {
      q: "Do you work with QuickBooks?",
      a: "Absoluty. QuickBooks is our core platform focus. We assist with initial software setup, Chart of Accounts optimization, transaction categorization, and routine maintenance."
    },
    {
      q: "Can you clean up my existing disorganized books?",
      a: "Yes. Our Bookkeeping Cleanup & Catch-Up service is designed specifically for businesses with backlog, uncategorized transactions, or balancing discrepancies."
    },
    {
      q: "Can you bring my bookkeeping up to date if I am months behind?",
      a: "Yes. We review your bank statements and historical transactions to systematically record, reconcile, and update your financial records from past periods."
    },
    {
      q: "How often can my books be maintained?",
      a: "We offer flexible schedules including weekly, bi-weekly, monthly, or project-based periodic bookkeeping depending on your business size and transaction volume."
    },
    {
      q: "Can I receive monthly financial reports?",
      a: "Yes. Standard and Professional clients receive straightforward Profit & Loss Statements, Balance Sheets, and Cash Flow summaries every month."
    },
    {
      q: "Do you offer customized bookkeeping packages?",
      a: "Yes! If our standard packages do not fit your exact requirements, we create custom quotes based on your transaction volume and reporting complexity."
    },
    {
      q: "How do I get started with FINCLARITY?",
      a: "Getting started is easy! Click 'Book a Consultation' or contact us directly via WhatsApp (+254 719 611 029 / +256 789 873 376). We will discuss your needs and set up your engagement."
    }
  ];

  return (
    <section id="faqs" style={{ padding: '5.5rem 0', background: 'var(--bg-slate)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Frequently Asked Questions</span>
          <h2>Clear Answers to Your Questions</h2>
          <p>
            Have questions about working with FINCLARITY? Here is everything you need to know about our services and process.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: isOpen ? 'var(--accent-emerald)' : 'var(--primary-navy)',
                    background: isOpen ? 'var(--accent-emerald-subtle)' : 'white'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} color={isOpen ? 'var(--accent-emerald)' : 'var(--text-muted)'} />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '1.25rem 1.5rem 1.5rem 3.25rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(16, 185, 129, 0.1)'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Have a specific question not listed here?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="btn btn-outline"
          >
            Contact FINCLARITY Directly
          </button>
        </div>
      </div>
    </section>
  );
}
