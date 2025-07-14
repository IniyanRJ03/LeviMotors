import React from 'react';

export default function Promise() {
  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: '#f7e6ea' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#660914', marginBottom: 22 }}>
          Our Promise
        </h2>
        <p style={{ color: '#7c232c', fontSize: '1.18rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
          At Levi Motors, we promise to treat every customer with honesty, respect, and care. We stand by the quality of our work, offer transparent pricing, and always put your safety and satisfaction first. Whether you need a routine service or a major repair, you can trust us to deliver reliable results and friendly service—every time.
        </p>
      </div>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 800px'] {
            padding: 0 8px !important;
          }
          section h2 {
            font-size: 1.4rem !important;
            margin-bottom: 18px !important;
          }
          section p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 24px 0 32px 0 !important;
          }
          section h2 {
            font-size: 1.1rem !important;
          }
          section p {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
    </section>
  );
}
