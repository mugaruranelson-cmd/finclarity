import React from 'react';
import { CheckCircle2, ChevronRight, Calendar, TrendingUp, ShieldCheck, PieChart, FileText } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section style={{
      padding: '4.5rem 0 5rem 0',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Copy & Action */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <ShieldCheck size={16} /> Weekly • Monthly • Project-Based Support
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--primary-navy)',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
            }}>
              Accurate Books. <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-emerald) 0%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Clear Reports.
              </span> <br />
              Better Decisions.
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px',
              lineHeight: 1.6
            }}>
              Reliable QuickBooks bookkeeping and financial support that keeps your records organized, your reports clear, and your business moving forward.
            </p>

            {/* Value props bullets */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" /> QuickBooks Maintenance
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" /> Bank Reconciliations
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" /> P&L & Cash Flow Reports
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" /> Cleanup & Catch-Up
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
              >
                Get Started <ChevronRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-secondary"
                style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
              >
                <Calendar size={18} /> Book a Consultation
              </button>
            </div>
          </div>

          {/* Right Column: High Impact Visual Preview */}
          <div style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {/* Main Visual Container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              background: '#0F172A'
            }}>
              <img
                src="/images/hero_dashboard.png"
                alt="FINCLARITY Financial Bookkeeping Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Overlay Glass Floating Widget */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                color: 'white'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Books Status</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#10B981', marginTop: '0.2rem' }}>
                    <ShieldCheck size={16} /> Reconciled
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Accuracy</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#F59E0B', marginTop: '0.2rem' }}>
                    <TrendingUp size={16} /> 100% Match
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reporting</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#38BDF8', marginTop: '0.2rem' }}>
                    <FileText size={16} /> Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
