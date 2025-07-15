import React from 'react';

const address = '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA';
const phone = '09876 543210';
const email = 'contact@levimotors.com';

const contactInfo = [
  {
    label: 'Address',
    value: address,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9 5.4c-1.5 2-4.6 5.1-6.1 6.1-1.5-1-4.6-4.1-6.1-6.1A8.38 8.38 0 0 1 3 10.5C3 6.36 6.36 3 10.5 3s7.5 3.36 7.5 7.5z"/></svg>
    ),
  },
  {
    label: 'Phone',
    value: phone,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
  {
    label: 'Email',
    value: email,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
    ),
  },
];

export default function FindUs() {
  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: 'linear-gradient(180deg, #f7f2f3 60%, #fff 100%)' }}>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#6a1b2a', marginBottom: 8, fontFamily: 'Geist, Inter, Segoe UI, sans-serif', letterSpacing: '-1px' }}>Find Us</h2>
        <div style={{ color: '#a03c5a', fontSize: '1.1rem', marginBottom: 32, fontFamily: 'Geist, Inter, Segoe UI, sans-serif', fontWeight: 500, letterSpacing: '0.01em' }}>
          Visit our location or get in touch with us for your transportation needs
        </div>
      </div>
      <style>{`
        .findus-card {
          transition: box-shadow 0.25s cubic-bezier(.4,1,.4,1), transform 0.25s cubic-bezier(.4,1,.4,1);
        }
        .findus-card:hover {
          box-shadow: 0 8px 32px rgba(160,60,90,0.16);
          transform: translateY(-6px) scale(1.03);
        }
        .findus-icon {
          transition: background 0.25s cubic-bezier(.4,1,.4,1);
        }
        .findus-card:hover .findus-icon {
          background: #a03c5a !important;
        }
        @media (max-width: 800px) {
          .findus-flex {
            flex-direction: column !important;
            gap: 24px !important;
            align-items: stretch !important;
          }
          section {
            padding: 32px 0 40px 0 !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          div[style*='font-size: 1.1rem'] {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div className="findus-flex" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 48,
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {/* Map */}
        <div style={{ flex: '1 1 350px', minWidth: 320, maxWidth: 420, borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 16px rgba(160,60,90,0.10)', background: '#fff', border: '1.5px solid #e2cfd3' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043,+USA&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, width: '100%', height: 320, display: 'block' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact Info */}
        <div style={{ flex: '1 1 320px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {contactInfo.map((item, idx) => (
            <div key={item.label} className="findus-card" style={{
              background: '#fff',
              color: '#6a1b2a',
              borderRadius: 14,
              padding: '22px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              boxShadow: '0 2px 12px rgba(160,60,90,0.08)',
              fontSize: '1.1rem',
              fontWeight: 500,
              border: '1.5px solid #e2cfd3',
              cursor: 'pointer',
            }}>
              <span className="findus-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7e3ea', borderRadius: '50%', width: 38, height: 38, marginRight: 8 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: 2, color: '#a03c5a' }}>{item.label}</div>
                <div style={{ fontWeight: 400, fontSize: '1rem', color: '#6a1b2a' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 