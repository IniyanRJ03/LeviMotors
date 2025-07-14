import React from 'react';

const workshops = [
  {
    title: 'All Makes & Models',
    description: 'We service and repair all car brands, vans, and light commercial vehicles.',
    bullets: [
      'Petrol, diesel, hybrid, electric',
      'Small cars, family cars, vans',
      'Light commercial vehicles',
      'Manufacturer-approved parts',
    ],
    image: '/home/services/Car Servicing.jpg',
  },
  {
    title: 'Modern Diagnostic Equipment',
    description: 'Advanced tools for quick, accurate fault finding and repairs.',
    bullets: [
      'Computer diagnostics',
      'Engine management',
      'Warning lights & emissions',
      'Latest technology',
    ],
    image: '/home/services/Vehicle Diagnostics.jpg',
  },
  {
    title: 'MOT & Repair Bay',
    description: 'On-site MOT testing and repairs. Fast turnaround and honest advice.',
    bullets: [
      'Pre-MOT checks',
      'Brakes, suspension, exhausts',
      'Same-day repairs available',
    ],
    image: '/home/services/MOT Repairs & Checks.jpg',
  },
];

export default function Workshop() {
  return (
    <section style={{ width: '100%', padding: '48px 0 64px 0', background: '#f7e6ea' }}>
      <style>{`
        .workshop-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          border-left: 6px solid #660914;
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .workshop-card:hover {
          box-shadow: 0 8px 32px rgba(102,9,20,0.13);
          transform: translateY(-6px) scale(1.03);
        }
        .workshop-img {
          border-radius: 18px 18px 0 0;
        }
        @media (max-width: 800px) {
          .workshop-grid {
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
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#660914', marginBottom: 8 }}>Our Workshop & Capabilities</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 32 }}>
          Fully equipped garage for all makes and models. Modern diagnostics, MOT bay, and experienced technicians.
        </div>
      </div>
      <div className="workshop-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        justifyContent: 'center',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {workshops.map((item, idx) => (
          <div key={item.title} className="workshop-card">
            <img
              src={item.image}
              alt={item.title}
              className="workshop-img"
              style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '28px 22px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, color: '#660914' }}>{item.title}</div>
              <div style={{ color: '#7c232c', fontSize: '1rem', fontWeight: 400, marginBottom: 16 }}>{item.description}</div>
              <ul style={{ textAlign: 'left', color: '#222', fontSize: '1rem', fontWeight: 400, paddingLeft: 18, margin: 0 }}>
                {item.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: 6, listStyle: 'none', position: 'relative', paddingLeft: 18 }}>
                    <span style={{ position: 'absolute', left: 0, color: '#660914', fontWeight: 700 }}>✔</span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 