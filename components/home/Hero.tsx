'use client';
import React from 'react';
import { motion, easeInOut } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
};

export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(120deg, #f7e6ea 0%, #fff 100%)',
        overflow: 'hidden',
        padding: '0',
      }}
    >
      {/* Blurred Background Image */}
      <img
        src="/home/hero_bg.jpg"
        alt="Hero background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'blur(5px)',
          pointerEvents: 'none',
        }}
      />
      {/* Dark Overlay to remove white glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(40, 0, 20, 0.55)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Decorative Accent Shape */}
      <div
        style={{
          position: 'absolute',
          right: '-180px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 520,
          height: 520,
          background: 'radial-gradient(circle at 60% 40%, #660914 60%, #a03c5a 100%)',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(8px)',
          opacity: 0.18,
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          width: '100%',
          maxWidth: 1440,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          gap: 48,
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Text Content */}
        <div
          style={{
            flex: 1,
            minWidth: 320,
            color: '#660914',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '48px 0',
          }}
        >
          <motion.div variants={fadeUp}>
            <div
              style={{
                background: '#fff',
                color: '#a03c5a',
                fontWeight: 700,
                fontSize: '1.08rem',
                borderRadius: 16,
                padding: '6px 18px',
                marginBottom: 18,
                boxShadow: '0 2px 8px rgba(160,60,90,0.08)',
                letterSpacing: '1px',
              }}
            >
              20+ Years Experience
            </div>
            <h1
              style={{
                fontSize: '3.6rem',
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: 22,
                marginTop: 0,
                color: '#fff',
                letterSpacing: '-1px',
              }}
            >
              Trusted <span style={{ color: '#fff' }}>Car Repairs</span>
              <br />& Servicing in Gravesend
            </h1>
          </motion.div>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '1.35rem',
              color: '#fff',
              marginBottom: 36,
              maxWidth: 540,
              marginTop: 0,
              fontWeight: 500,
            }}
          >
            Reliable, affordable car repairs and servicing. Qualified diagnostics technician. 56 London Road, Northfleet, Gravesend, DA11 9LF.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a
              href="tel:07788256481"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#660914',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: '18px 32px',
                fontWeight: 700,
                fontSize: '1.18rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(102,9,20,0.10)',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              <span style={{ marginRight: 12, display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              Call Us Now: 0123456789
            </a>
            <a
              href="#quote"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                color: '#a03c5a',
                border: '2px solid #a03c5a',
                borderRadius: '20px',
                padding: '18px 32px',
                fontWeight: 700,
                fontSize: '1.18rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(160,60,90,0.08)',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>
        {/* Right: Image */}
        <motion.div
          variants={fadeUp}
          style={{
            flex: 1,
            minWidth: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 0',
            position: 'relative',
          }}
        >
          {/* Accent Circle Behind Image */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 340,
              height: 340,
              background: 'radial-gradient(circle at 60% 40%, #a03c5a 60%, #660914 100%)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.18,
              filter: 'blur(2px)',
            }}
          />
          <img
            src="/home/home_hero.jpg"
            alt="Mechanic at work"
            style={{
              width: 400,
              height: 340,
              objectFit: 'cover',
              borderRadius: '32px',
              boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </motion.div>
      </motion.div>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 1440px'] {
            flex-direction: column;
            gap: 0 !important;
            padding: 0 12px !important;
          }
          section > div[style*='min-width: 320px']:first-child {
            align-items: center !important;
            text-align: center !important;
            padding: 32px 0 !important;
          }
          section h1 {
            font-size: 2.2rem !important;
            line-height: 1.15 !important;
          }
          section p {
            font-size: 1.05rem !important;
            margin-bottom: 24px !important;
          }
          section img[alt='Mechanic at work'] {
            width: 90vw !important;
            max-width: 340px !important;
            height: auto !important;
            border-radius: 20px !important;
          }
          section .motion-div {
            padding: 0 !important;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 0 !important;
          }
          section h1 {
            font-size: 1.4rem !important;
          }
          section p {
            font-size: 0.98rem !important;
          }
          section a {
            font-size: 1rem !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>
    </section>
  );
} 