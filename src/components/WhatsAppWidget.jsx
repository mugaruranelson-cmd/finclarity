import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Phone } from 'lucide-react';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const defaultMsg = encodeURIComponent("Hello FINCLARITY, I'd like to discuss bookkeeping support for my business.");
  const kenyaUrl = `https://wa.me/254719611029?text=${defaultMsg}`;
  const ugandaUrl = `https://wa.me/256789873376?text=${defaultMsg}`;

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '1.75rem', zIndex: 9999 }}>
      {/* Expanded Modal Box */}
      {open && (
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          right: 0,
          width: '320px',
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Header */}
          <div style={{
            background: '#075E54',
            color: 'white',
            padding: '1.25rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}>
                <MessageSquare size={20} color="white" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>FINCLARITY WhatsApp</h4>
                <span style={{ fontSize: '0.75rem', color: '#A7F3D0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span> Online Support
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: 'white', opacity: 0.8 }}>
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '1.25rem', background: '#ECE5DD' }}>
            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem',
              fontSize: '0.875rem',
              color: 'var(--text-dark)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}>
              👋 Hello! Welcome to FINCLARITY HUB SERVICES. Choose your region to start a direct WhatsApp chat:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={kenyaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#25D366',
                  color: 'white',
                  justify: 'space-between',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span>🇰🇪 Chat with Kenya (+254)</span>
                <ChevronRight size={18} />
              </a>

              <a
                href={ugandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#128C7E',
                  color: 'white',
                  justify: 'space-between',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span>🇺🇬 Chat with Uganda (+256)</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact us on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulseGlow 3s infinite'
        }}
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
