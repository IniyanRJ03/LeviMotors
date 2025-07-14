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

export default function AboutHero() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `url('/home/hero_bg.jpg') center/cover no-repeat`,
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
          padding: '48px 48px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 700, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <motion.h1 variants={fadeUp} style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 18, letterSpacing: '-1px' }}>About Levi Motors</motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.18rem', color: '#fff', maxWidth: 540, fontWeight: 400, marginBottom: 0 }}>
            Learn more about our family-run garage, our values, and our commitment to quality, honesty, and customer satisfaction in Gravesend and beyond.
          </motion.p>
        </div>
        {/* Right: Image */}
        <motion.div
          variants={fadeUp}
          style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center' }}
        >
          <img
            src="/home/services/Car Repairs.jpg"
            alt="About Levi Motors"
            style={{
              width: 320,
              height: 220,
              objectFit: 'cover',
              borderRadius: 18,
              boxShadow: '0 4px 32px rgba(0,0,0,0.13)',
              background: '#222',
            }}
          />
        </motion.div>
      </motion.div>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*='max-width: 1440px'] {
            flex-direction: column;
            gap: 32px !important;
            padding: 32px 12px !important;
          }
          section h1 {
            font-size: 2rem !important;
            text-align: center !important;
          }
          section p {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
} 