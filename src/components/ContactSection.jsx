import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    businessType: '',
    service: 'Ongoing bookkeeping',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Get In Touch</span>
          <h2>Talk to FINCLARITY Today</h2>
          <p>
            Ready for organized records and clear financial reporting? Send us a message or request your consultation below.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div>
            <div style={{
              background: 'var(--primary-navy)',
              color: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-xl)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={22} color="#10B981" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</span>
                    <a href="mailto:hubf706@gmail.com" style={{ display: 'block', fontWeight: 600, fontSize: '1.05rem', color: 'white' }}>
                      hubf706@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-md)', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={22} color="#25D366" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp Direct Lines</span>
                    <a href="https://wa.me/254719611029?text=Hello%20FINCLARITY%2C%20I'd%20like%20to%20discuss%20bookkeeping%20support%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontWeight: 600, fontSize: '1rem', color: '#25D366', marginTop: '0.2rem' }}>
                      🇰🇪 Kenya: +254 719 611 029
                    </a>
                    <a href="https://wa.me/256789873376?text=Hello%20FINCLARITY%2C%20I'd%20like%20to%20discuss%20bookkeeping%20support%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontWeight: 600, fontSize: '1rem', color: '#38BDF8', marginTop: '0.2rem' }}>
                      🇺🇬 Uganda: +256 789 873 376
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={22} color="#F59E0B" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Coverage</span>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '1rem', color: 'white' }}>
                      East Africa • Remote & On-Site Engagement
                    </span>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#10B981', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={18} /> Confidentiality Guaranteed
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                  All inquiry details and business records are handled under strict privacy standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div style={{
            background: 'var(--bg-slate)',
            padding: '2.5rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Request a Consultation
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill out the short form below and our team will review your bookkeeping requirements.
            </p>

            {submitted ? (
              <div style={{
                background: 'var(--accent-emerald-subtle)',
                border: '2px solid var(--accent-emerald)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', color: 'white' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                  Consultation Request Received
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you. Your request has been received. FINCLARITY will review your information and get back to you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                  style={{ fontSize: '0.875rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: 'white'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                      Business / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                      Type of Business
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Retail, NGO, Startup"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                    What do you need help with?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Ongoing bookkeeping">Ongoing bookkeeping</option>
                    <option value="QuickBooks setup">QuickBooks setup</option>
                    <option value="Bank reconciliation">Bank reconciliation</option>
                    <option value="Financial reporting">Financial reporting</option>
                    <option value="Bookkeeping cleanup">Bookkeeping cleanup & catch-up</option>
                    <option value="Budget monitoring">Budget monitoring</option>
                    <option value="NGO/project expenditure tracking">NGO/project expenditure tracking</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                    Message / Business Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your current bookkeeping situation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: 'white',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} /> Request a Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
