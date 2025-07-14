import React from 'react';
import { MdPhone, MdBuild, MdDone } from 'react-icons/md';

const steps = [
  {
    icon: <MdPhone size={36} color="#660914" />,
    title: '1. Get in Touch',
    description: 'Call us or request a quote online. We listen to your needs and provide expert advice.',
  },
  {
    icon: <MdBuild size={36} color="#660914" />,
    title: '2. We Service Your Car',
    description: 'Bring your vehicle to our workshop or arrange collection. Our qualified technicians get to work.',
  },
  {
    icon: <MdDone size={36} color="#660914" />,
    title: '3. Drive Away Happy',
    description: 'Pick up your car (or we deliver it). Enjoy reliable repairs and peace of mind.',
  },
];

export default function HowItWork() {
  return (
    <section style={{ width: '100%', padding: '48px 0 64px 0', background: '#f7e6ea' }}>
      <style>{`
        .how-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          transition: box-shadow 0.3s, transform 0.3s;
          padding: 38px 24px 28px 24px;
          text-align: center;
        }
        .how-card:hover {
          box-shadow: 0 8px 32px rgba(102,9,20,0.13);
          transform: translateY(-6px) scale(1.03);
        }
        .how-icon {
          margin-bottom: 18px;
        }
        @media (max-width: 800px) {
          .how-grid {
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
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#660914', marginBottom: 8 }}>How It Works</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 32 }}>
          Simple, transparent, and customer-focused from start to finish
        </div>
      </div>
      <div className="how-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        justifyContent: 'center',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {steps.map((step, idx) => (
          <div key={step.title} className="how-card">
            <div className="how-icon">{step.icon}</div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: 8, color: '#660914' }}>{step.title}</div>
            <div style={{ color: '#7c232c', fontSize: '1rem', fontWeight: 400 }}>{step.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
