import React from 'react';
import { MdAccessTime, MdVerified, MdLocationOn } from 'react-icons/md';

const reasons = [
  {
    icon: <MdAccessTime size={36} color="#660914" />,
    title: '20+ Years',
    subtitle: 'Experience',
    description: 'Over 20 years of trusted car repairs and servicing.',
  },
  {
    icon: <MdVerified size={36} color="#660914" />,
    title: 'Qualified',
    subtitle: 'Diagnostics Technician',
    description: 'Expert in advanced fault finding and diagnostics.',
  },
  {
    icon: <MdLocationOn size={36} color="#660914" />,
    title: '56 London Road, Northfleet, Gravesend, DA11 9LF',
    subtitle: 'Trusted Locally',
    description: 'Reliable & affordable service. Free quotes available.',
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ width: '100%', padding: '48px 0 64px 0', background: '#f7f2f3' }}>
      <style>{`
        .why-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          transition: box-shadow 0.3s, transform 0.3s;
          padding: 38px 24px 28px 24px;
          text-align: center;
        }
        .why-card:hover {
          box-shadow: 0 8px 32px rgba(102,9,20,0.13);
          transform: translateY(-6px) scale(1.03);
        }
        .why-icon {
          margin-bottom: 18px;
        }
        @media (max-width: 800px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          section {
            padding: 28px 0 36px 0 !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          div[style*='font-size: 1.1rem'] {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#660914', marginBottom: 8 }}>Why Choose Us</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 32 }}>
          Experience the difference with our commitment<br />to excellence and customer satisfaction
        </div>
      </div>
      <div className="why-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        justifyContent: 'center',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {reasons.map((reason, idx) => (
          <div key={reason.title} className="why-card">
            <div className="why-icon">{reason.icon}</div>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 2, color: '#660914' }}>{reason.title}</div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, color: '#7c232c' }}>{reason.subtitle}</div>
            <div style={{ color: '#222', fontSize: '1rem', fontWeight: 400 }}>{reason.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 