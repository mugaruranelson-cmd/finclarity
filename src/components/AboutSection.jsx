import React from 'react';
import { Target, Heart, ShieldCheck, Check } from 'lucide-react';

export default function AboutSection({ onNavigate }) {
  return (
    <section style={{ padding: '5.5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge badge-emerald">About FINCLARITY HUB SERVICES</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--primary-navy)',
              margin: '0.75rem 0 1.25rem 0'
            }}>
              Bookkeeping made simple. <br />
              <span style={{ color: 'var(--accent-emerald)' }}>Financial clarity made possible.</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              FINCLARITY HUB SERVICES is a dedicated bookkeeping and financial support partner built to serve small businesses, entrepreneurs, startups, non-profits, and professionals across East Africa.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              We specialize in removing the stress of financial record-keeping. By maintaining organized QuickBooks ledgers, performing diligent bank reconciliations, and delivering clear reports, we empower decision-makers to run their organizations with full financial confidence.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{
                padding: '1.25rem',
                background: 'var(--bg-slate)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}>
                <Target size={24} color="var(--accent-emerald)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Our Purpose</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>To make professional financial record-keeping accessible, understandable, and valuable for every growing business.</p>
              </div>

              <div style={{
                padding: '1.25rem',
                background: 'var(--bg-slate)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)'
              }}>
                <ShieldCheck size={24} color="var(--brand-gold)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Our Promise</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>100% accurate entries, transparent communication, and absolute confidentiality for all your accounts.</p>
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-slate)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
              How We Help Your Business Thrive
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Hands-on QuickBooks setup & maintenance",
                "Meticulous bank and mobile money reconciliations",
                "Plain-English financial reporting without jargon",
                "Historical catch-up & record cleanup services",
                "NGO grant expense tracking and donor reporting",
                "Flexible weekly, monthly, or project engagements"
              ].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Work With FINCLARITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
