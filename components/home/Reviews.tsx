'use client';

import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const reviews = [
  {
    text: 'Brilliant service. Quick MOT and fixed my brakes same day!',
    name: 'Mark P.',
    role: 'Local Customer',
  },
  {
    text: 'Knowledgeable and honest. Will definitely return.',
    name: 'Rachel S.',
    role: 'Car Owner',
  },
  {
    text: 'Good prices and trustworthy advice. Highly recommended!',
    name: 'Liam J.',
    role: 'Regular Customer',
  },
  {
    text: 'Super friendly staff and quick turnaround. My go-to garage!',
    name: 'Sophie W.',
    role: 'Happy Customer',
  },
  {
    text: 'Transparent pricing and honest advice. 5 stars!',
    name: 'David K.',
    role: 'Repeat Customer',
  },
  {
    text: 'They fixed an issue other garages missed. Highly recommend.',
    name: 'Priya S.',
    role: 'Satisfied Customer',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  const handleChange = (idx: number, dir: 'left' | 'right') => {
    if (animating || idx === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 350);
  };
  const goTo = (idx: number) => handleChange(idx, idx > current ? 'right' : 'left');
  const handlePrev = () => handleChange((current - 1 + reviews.length) % reviews.length, 'left');
  const handleNext = () => handleChange((current + 1) % reviews.length, 'right');

  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: '#f7e6ea' }}>
      <style>{`
        .review-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 600px;
          margin: 0 auto;
        }
        .review-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          border-left: 6px solid #660914;
          transition: box-shadow 0.3s, transform 0.3s, opacity 0.3s;
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 220px;
          min-width: 340px;
          max-width: 480px;
          min-height: 180px;
          max-height: 260px;
          position: relative;
          padding: 32px 28px 28px 28px;
          opacity: 1;
          z-index: 1;
        }
        .review-card.review-anim.animating.left {
          animation: review-exit-left 0.35s forwards;
        }
        .review-card.review-anim.animating.right {
          animation: review-exit-right 0.35s forwards;
        }
        .review-card.review-anim.left:not(.animating) {
          animation: review-enter-left 0.35s;
        }
        .review-card.review-anim.right:not(.animating) {
          animation: review-enter-right 0.35s;
        }
        @keyframes review-exit-left {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes review-exit-right {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(60px); }
        }
        @keyframes review-enter-left {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes review-enter-right {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .review-arrow {
          background: #fff;
          border: 1.5px solid #660914;
          color: #660914;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          cursor: pointer;
          margin: 0 18px;
          transition: background 0.2s, color 0.2s;
        }
        .review-arrow:hover {
          background: #660914;
          color: #fff;
        }
        .review-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
        }
        .review-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          transition: background 0.2s;
          cursor: pointer;
        }
        .review-dot.active {
          background: #660914;
        }
        @media (max-width: 700px) {
          .review-carousel {
            flex-direction: column !important;
            gap: 12px !important;
            max-width: 98vw !important;
          }
          .review-card {
            width: 98vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            height: auto !important;
            min-height: 120px !important;
            padding: 18px 8px 18px 8px !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          div[style*='font-size: 1.1rem'] {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#660914', marginBottom: 8 }}>What Our Customers Say</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 18 }}>
          Don’t just take our word for it – hear from our satisfied customers
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0 32px 0' }}>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', color: '#660914', fontWeight: 600, fontSize: '1.18rem', fontFamily: 'inherit' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ marginRight: 10 }}><circle cx="14" cy="14" r="14" fill="#00B67A"/><path d="M14 7.5l1.62 4.99h5.25l-4.25 3.09 1.62 4.99L14 17.48l-4.25 3.09 1.62-4.99-4.25-3.09h5.25L14 7.5z" fill="#fff"/></svg>
              Trustpilot Reviews
            </span>
            <span style={{ display: 'flex', alignItems: 'center', color: '#660914', fontWeight: 600, fontSize: '1.18rem', fontFamily: 'inherit' }}>
              <svg width="28" height="28" viewBox="0 0 48 48" style={{ marginRight: 10 }}><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.7 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23s9.4 21 21 21c10.5 0 20-8.1 20-21 0-1.4-.1-2.4-.3-3.5z"/><path fill="#34A853" d="M6.3 14.7A17.9 17.9 0 0 1 24 6c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23c0 2.7.5 5.3 1.3 7.7l7.7-6z"/><path fill="#FBBC05" d="M24 44c6.2 0 11.4-2.1 15.2-5.7l-7.1-5.8C29.7 34.9 27 36 24 36c-6.1 0-11.2-4.1-13-9.7l-7.7 6C6.6 40.2 14.5 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.9 33.7 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23s9.4 21 21 21c10.5 0 20-8.1 20-21 0-1.4-.1-2.4-.3-3.5z"/></g></svg>
              Google Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="review-carousel">
        <span className="review-arrow" onClick={handlePrev} aria-label="Previous Review">
          <MdChevronLeft />
        </span>
        <div className={`review-card review-anim${animating ? ' animating ' + direction : ''}`}>
          <div style={{ fontSize: '2.2rem', color: '#660914', opacity: 0.5, marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
          <div style={{ marginBottom: 18, color: '#222' }}>{reviews[current].text}</div>
          <div style={{ fontWeight: 700, marginTop: 'auto', color: '#660914' }}>{reviews[current].name}</div>
          <div style={{ fontSize: '0.98rem', color: '#7c232c', fontWeight: 400 }}>{reviews[current].role}</div>
        </div>
        <span className="review-arrow" onClick={handleNext} aria-label="Next Review">
          <MdChevronRight />
        </span>
      </div>
      <div className="review-dots">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`review-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </section>
  );
} 