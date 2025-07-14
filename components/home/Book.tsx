import React from 'react';

export default function Book() {
  return (
    <section style={{ width: '100%', padding: '64px 0 80px 0', background: 'linear-gradient(90deg, #a03c5a 0%, #e2cfd3 100%)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
        Ready to Book Your Service?
      </h2>
      <div style={{ color: '#f7e3ea', fontSize: '1.1rem', marginBottom: 32 }}>
        Get a free quote or book your service online. We offer competitive prices and quality workmanship.
      </div>
      <style>{`
        @media (max-width: 700px) {
          .book-btns {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }
          section {
            padding: 36px 0 48px 0 !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          div[style*='font-size: 1.1rem'] {
            font-size: 0.98rem !important;
          }
          a {
            font-size: 0.98rem !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>
      <div className="book-btns" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        <a href="#quote" style={{
          background: '#fff',
          color: '#a03c5a',
          border: 'none',
          borderRadius: '12px',
          padding: '14px 32px',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(160,60,90,0.10)',
          transition: 'background 0.2s, color 0.2s',
        }}>
          Get a Free Quote
        </a>
        <a href="#services" style={{
          background: '#fff',
          color: '#a03c5a',
          border: 'none',
          borderRadius: '12px',
          padding: '14px 32px',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(160,60,90,0.10)',
          transition: 'background 0.2s, color 0.2s',
        }}>
          View Our Services
        </a>
      </div>
    </section>
  );
} 