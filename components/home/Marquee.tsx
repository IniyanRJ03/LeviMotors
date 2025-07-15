import React from 'react';

export default function Marquee() {
  return (
    <div style={{
      width: '100%',
      background: '#ffe000',
      overflow: 'hidden',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
        <div className="marquee-track" style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          fontWeight: 800,
          fontSize: '2.1rem',
          color: '#111',
          letterSpacing: '-1px',
          fontFamily: 'Geist, Inter, Segoe UI, sans-serif',
          animation: 'marquee-scroll 18s linear infinite',
          willChange: 'transform',
        }}>
          <span style={{ paddingRight: 80 }}>
            We are open <span style={{ color: '#111', fontWeight: 900 }}>24/7</span> – Fast, Friendly, Reliable Service, Day or Night!
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-track {
          min-width: 100vw;
        }
        @media (max-width: 700px) {
          .marquee-track {
            font-size: 1.1rem !important;
          }
          div[style*='height: 64px'] {
            height: 38px !important;
          }
        }
      `}</style>
    </div>
  );
} 