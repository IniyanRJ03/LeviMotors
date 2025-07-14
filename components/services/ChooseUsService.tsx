import React from 'react';

const points = [
  {
    title: 'Qualified Diagnostics Technician',
    desc: 'Expert fault finding and advanced computer diagnostics for all makes and models.',
  },
  {
    title: 'Over 20 Years Experience',
    desc: 'A local, family–run garage trusted by the Gravesend community.',
  },
  {
    title: 'Affordable MOTs & Repairs',
    desc: 'MOTs for just £30. Honest pricing on all repairs and servicing.',
  },
  {
    title: 'Free Quotes',
    desc: 'Call us for a no–obligation quote on any job—big or small.',
  },
  {
    title: 'Trusted in 56 London Road, Northfleet, Gravesend, DA11 9LF',
    desc: 'Known for reliability, honesty, and friendly service.',
  },
];

export default function ChooseUsService() {
  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: '#f7f2f3' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 64,
        padding: '0 32px',
      }}>
        {/* Left: Image */}
        <div style={{ flex: '1 1 480px', minWidth: 320, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/home/services/Car Servicing.jpg"
            alt="Car Servicing"
            style={{
              width: 480,
              maxWidth: '100%',
              borderRadius: 18,
              boxShadow: '0 6px 36px rgba(102,9,20,0.13)',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* Right: Content */}
        <div style={{ flex: '1 1 520px', minWidth: 320, maxWidth: 600 }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 900, color: '#660914', marginBottom: 32, textAlign: 'left', letterSpacing: '-1px' }}>
            Why Choose Our Services?
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {points.map((point, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 32 }}>
                <span style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  minWidth: 16,
                  minHeight: 16,
                  borderRadius: '50%',
                  background: '#660914',
                  marginRight: 18,
                  marginTop: 7,
                }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#660914', marginBottom: 2 }}>{point.title}</div>
                  <div style={{ color: '#7c232c', fontSize: '1.05rem', fontWeight: 400 }}>{point.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 1200px'] {
            flex-direction: column;
            gap: 32px !important;
            padding: 0 12px !important;
          }
          section h2 {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
