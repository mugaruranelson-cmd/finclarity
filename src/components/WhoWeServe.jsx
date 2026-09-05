import React from 'react';
import { Store, Rocket, UserCheck, HeartHandshake, TrendingUp, Briefcase } from 'lucide-react';

export default function WhoWeServe({ onNavigate }) {
  const audiences = [
    {
      icon: <Store size={30} color="var(--accent-emerald)" />,
      title: "Small Businesses",
      desc: "Retail, services, distribution, and local businesses that need reliable monthly bookkeeping and bank reconciliation."
    },
    {
      icon: <Rocket size={30} color="var(--brand-gold)" />,
      title: "Startups & Entrepreneurs",
      desc: "Fast-growing teams that need organized financial setup, expense monitoring, and clean ledgers for investor/bank readiness."
    },
    {
      icon: <UserCheck size={30} color="var(--primary-navy)" />,
      title: "Freelancers & Professionals",
      desc: "Consultants, contractors, and sole proprietors who want to separate business expenses and track exact income."
    },
    {
      icon: <HeartHandshake size={30} color="#D97706" />,
      title: "NGOs & Community Organizations",
      desc: "Non-profits requiring grant expenditure tracking, project cost allocation, and structured budget monitoring."
    },
    {
      icon: <TrendingUp size={30} color="#059669" />,
      title: "Growing Businesses",
      desc: "Companies scaling up transaction volume that need regular monthly P&L and Balance Sheet reports for strategic decisions."
    },
    {
      icon: <Briefcase size={30} color="#2563EB" />,
      title: "Organizations Behind on Books",
      desc: "Businesses facing months of backlog or disorganized records needing a thorough, systematic catch-up cleanup."
    }
  ];

  return (
    <section id="whoweserve" style={{ padding: '5.5rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Target Industries & Entities</span>
          <h2>Who We Serve</h2>
          <p>
            Our services are customized to fit the exact financial workflows of diverse organizations across East Africa.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {audiences.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-slate)',
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
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
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
