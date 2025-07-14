'use client';
import React from 'react';

export default function ContactForm() {
  return (
    <section style={{ background: '#f7e6ea', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', maxWidth: '100vw', padding: '48px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 900px'] {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 8px !important;
          }
          section h2 {
            text-align: center !important;
            font-size: 1.4rem !important;
            margin-bottom: 18px !important;
          }
          section p {
            font-size: 1rem !important;
          }
          section img[alt='Contact Levi Motors'] {
            width: 90vw !important;
            max-width: 340px !important;
            height: auto !important;
            border-radius: 14px !important;
            min-height: 180px !important;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 24px 0 32px 0 !important;
          }
          section h2 {
            font-size: 1.1rem !important;
          }
          section p, section label, section input, section textarea, section button {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'stretch', width: '100%', maxWidth: 900, flexWrap: 'wrap' }}>
        {/* Image Side */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/home/services/Car Repairs.jpg"
            alt="Contact Levi Motors"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: 420,
              borderRadius: 20,
              objectFit: 'cover',
              boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
              background: 'white',
              aspectRatio: '1/1.2',
              minHeight: 320,
            }}
          />
        </div>
        {/* Form Side */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'rgba(102,9,20,0.93)', borderRadius: 20, maxWidth: 420, width: '100%', margin: '0 auto', padding: '40px 32px 32px 32px', color: '#fff', boxShadow: '0 4px 32px rgba(102,9,20,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1.5px solid #a03c5a' }}>
            {/* Icon */}
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto' }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6"/></svg>
            </div>
            {/* Heading & Description */}
            <h2 style={{ fontWeight: 800, fontSize: '2rem', margin: '0 0 8px 0', textAlign: 'center' }}>Contact Form</h2>
            <p style={{ color: '#fff', opacity: 0.85, fontSize: '1.05rem', margin: '0 0 28px 0', textAlign: 'center' }}>
              We'd love to hear from you. Fill out the form and our team will get back to you promptly.
            </p>
            {/* Form Fields */}
            <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label htmlFor="firstName" style={{ fontWeight: 500, fontSize: '1rem', marginBottom: 4, display: 'block', color: '#fff' }}>First Name *</label>
                <input id="firstName" name="firstName" type="text" required style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #a03c5a', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '1rem', marginTop: 4, outline: 'none' }} />
              </div>
              <div>
                <label htmlFor="phone" style={{ fontWeight: 500, fontSize: '1rem', marginBottom: 4, display: 'block', color: '#fff' }}>Contact Phone Number</label>
                <input id="phone" name="phone" type="tel" style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #a03c5a', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '1rem', marginTop: 4, outline: 'none' }} />
              </div>
              <div>
                <label htmlFor="email" style={{ fontWeight: 500, fontSize: '1rem', marginBottom: 4, display: 'block', color: '#fff' }}>Email Address *</label>
                <input id="email" name="email" type="email" required style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #a03c5a', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '1rem', marginTop: 4, outline: 'none' }} />
              </div>
              <div>
                <label htmlFor="message" style={{ fontWeight: 500, fontSize: '1rem', marginBottom: 4, display: 'block', color: '#fff' }}>Message</label>
                <textarea id="message" name="message" rows={4} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #a03c5a', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '1rem', marginTop: 4, outline: 'none', resize: 'vertical' }} />
              </div>
              <button type="submit" style={{ marginTop: 18, width: '100%', background: '#660914', color: '#fff', fontWeight: 700, fontSize: '1.13rem', border: 'none', borderRadius: 12, padding: '16px 0', boxShadow: '0 2px 8px rgba(102,9,20,0.10)', cursor: 'pointer', transition: 'background 0.2s' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 