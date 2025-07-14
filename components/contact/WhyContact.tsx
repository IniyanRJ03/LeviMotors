'use client';
import React from 'react';

export default function WhyContact() {
  return (
    <section style={{ background: '#f7f2f3', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', maxWidth: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap', padding: '48px 0', border: 'none', boxShadow: 'none' }}>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 1200px'] {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 8px !important;
          }
          section h2 {
            text-align: center !important;
            font-size: 1.4rem !important;
            margin-bottom: 18px !important;
          }
          section ul {
            margin-top: 18px !important;
          }
          section li {
            margin-bottom: 18px !important;
          }
          section img[alt='Contact Levi Motors'] {
            width: 90vw !important;
            max-width: 340px !important;
            height: auto !important;
            border-radius: 14px !important;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 24px 0 32px 0 !important;
          }
          section h2 {
            font-size: 1.1rem !important;
          }
          section li div {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap', padding: '0 16px' }}>
        {/* Left: Image */}
        <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/home/services/Car Repairs.jpg"
            alt="Contact Levi Motors"
            style={{
              width: 420,
              height: 270,
              objectFit: 'cover',
              borderRadius: 20,
              boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
              background: 'white',
            }}
          />
        </div>
        {/* Right: Reasons List */}
        <div style={{ flex: 1.2, minWidth: 320 }}>
          <h2 style={{ color: '#660914', fontSize: '2rem', fontWeight: 800, marginBottom: 28, letterSpacing: '-1px' }}>
            Why Contact <span style={{ color: '#a03c5a' }}>LEVI Motors?</span>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 28 }}>
              <span style={{ width: 16, height: 16, background: '#660914', borderRadius: '50%', marginRight: 18, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#660914' }}>Free Quotes</div>
                <div style={{ color: '#444', fontSize: '1rem', marginTop: 2 }}>Call us for a no-obligation quote on any repair, service, or MOT.</div>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 28 }}>
              <span style={{ width: 16, height: 16, background: '#660914', borderRadius: '50%', marginRight: 18, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#660914' }}>Fast, Friendly Service</div>
                <div style={{ color: '#444', fontSize: '1rem', marginTop: 2 }}>We pride ourselves on quick turnarounds and honest advice.</div>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 28 }}>
              <span style={{ width: 16, height: 16, background: '#660914', borderRadius: '50%', marginRight: 18, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#660914' }}>Qualified Technicians</div>
                <div style={{ color: '#444', fontSize: '1rem', marginTop: 2 }}>Over 20 years' experience in diagnostics and repairs.</div>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ width: 16, height: 16, background: '#660914', borderRadius: '50%', marginRight: 18, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#660914' }}>Trusted Local Garage</div>
                <div style={{ color: '#444', fontSize: '1rem', marginTop: 2 }}>Serving 56 London Road, Northfleet, Gravesend, DA11 9LF with a reputation for reliability and value.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 