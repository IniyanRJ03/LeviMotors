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

const DESKTOP_REVIEWS_PER_SLIDE = 3;

function getReviewsPerSlide() {
  if (typeof window !== 'undefined' && window.innerWidth <= 900) {
    return 1;
  }
  return DESKTOP_REVIEWS_PER_SLIDE;
}

type Review = { text: string; name: string; role: string };
function getSlides(reviews: Review[], reviewsPerSlide: number): Review[][] {
  const slides: Review[][] = [];
  for (let i = 0; i < reviews.length; i += reviewsPerSlide) {
    slides.push(reviews.slice(i, i + reviewsPerSlide));
  }
  return slides;
}

export default function Reviews() {
  const [reviewsPerSlide, setReviewsPerSlide] = React.useState(getReviewsPerSlide());
  React.useEffect(() => {
    function handleResize() {
      setReviewsPerSlide(getReviewsPerSlide());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const slides = getSlides(reviews, reviewsPerSlide);
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
  const handlePrev = () => handleChange((current - 1 + slides.length) % slides.length, 'left');
  const handleNext = () => handleChange((current + 1) % slides.length, 'right');

  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: '#f7e6ea' }}>
      <style>{`
        .review-grid-box {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
          width: 100%;
        }
        .review-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          width: 100%;
        }
        .review-cards {
          display: grid;
          grid-template-columns: repeat(var(--reviews-per-slide, 3), 1fr);
          gap: 0;
          width: 100%;
          transition: transform 0.35s cubic-bezier(.4,1,.4,1), opacity 0.35s;
        }
        .review-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          border-left: 6px solid #660914;
          transition: box-shadow 0.3s, transform 0.3s, opacity 0.3s;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 160px;
          max-height: 340px;
          position: relative;
          padding: 28px 22px 22px 22px;
          opacity: 1;
          z-index: 1;
          margin: 0 12px;
        }
        .review-cards.animating.left {
          transform: translateX(-60px);
          opacity: 0;
        }
        .review-cards.animating.right {
          transform: translateX(60px);
          opacity: 0;
        }
        .review-slider {
          width: 100%;
          max-width: 400px;
          margin: 32px auto 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .review-slider input[type='range'] {
          width: 100%;
          accent-color: #660914;
          height: 4px;
          border-radius: 2px;
          background: #e2cfd3;
        }
        .review-slider .slider-label {
          font-size: 1rem;
          color: #660914;
          font-weight: 600;
          min-width: 32px;
          text-align: center;
        }
        .review-dots {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin: 32px 0 0 0;
        }
        .review-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #e2cfd3;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: 2px solid #660914;
        }
        .review-dot.active {
          background: #660914;
          box-shadow: 0 2px 8px rgba(102,9,20,0.13);
        }
        @media (max-width: 900px) {
          .review-grid-box {
            padding: 0 8px !important;
          }
          .review-cards {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#660914', marginBottom: 8, fontFamily: 'Geist, Inter, Segoe UI, sans-serif', letterSpacing: '-1px' }}>What Our Customers Say</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 18, fontFamily: 'Geist, Inter, Segoe UI, sans-serif', fontWeight: 500, letterSpacing: '0.01em' }}>
          Don’t just take our word for it – hear from our satisfied customers
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0 32px 0' }}>
          <div className="review-icons-bar">
            <span className="review-icon trustpilot">
              <svg width="44" height="44" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#00B67A"/><path d="M14 7.5l1.62 4.99h5.25l-4.25 3.09 1.62 4.99L14 17.48l-4.25 3.09 1.62-4.99-4.25-3.09h5.25L14 7.5z" fill="#fff"/></svg>
            </span>
            <span className="review-icon google">
              <svg width="44" height="44" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.7 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23s9.4 21 21 21c10.5 0 20-8.1 20-21 0-1.4-.1-2.4-.3-3.5z"/><path fill="#34A853" d="M6.3 14.7A17.9 17.9 0 0 1 24 6c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23c0 2.7.5 5.3 1.3 7.7l7.7-6z"/><path fill="#FBBC05" d="M24 44c6.2 0 11.4-2.1 15.2-5.7l-7.1-5.8C29.7 34.9 27 36 24 36c-6.1 0-11.2-4.1-13-9.7l-7.7 6C6.6 40.2 14.5 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.9 33.7 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.7 2 24 2 12.4 2 3 11.4 3 23s9.4 21 21 21c10.5 0 20-8.1 20-21 0-1.4-.1-2.4-.3-3.5z"/></g></svg>
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .review-icons-bar {
            gap: 32px !important;
          }
          .review-icon {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            margin: 0 12px !important;
          }
          .review-icon svg {
            width: 56px !important;
            height: 56px !important;
          }
        }
        @media (min-width: 701px) {
          .review-icons-bar {
            display: flex !important;
            gap: 48px !important;
          }
        }
      `}</style>
      <div className="review-grid-box">
        <div className="review-carousel">
          <span className="review-arrow" onClick={handlePrev} aria-label="Previous Review">
            <MdChevronLeft />
          </span>
          <div
            className={`review-cards${animating ? ' animating ' + direction : ''}`}
            style={{
              '--reviews-per-slide': reviewsPerSlide,
            } as React.CSSProperties}
          >
            {slides[current].map((review: Review, idx: number) => (
              <div key={review.text + idx} className="review-card">
                <div style={{ fontSize: '2.2rem', color: '#660914', opacity: 0.5, marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
                <div style={{ marginBottom: 18, color: '#222' }}>{review.text}</div>
                <div style={{ fontWeight: 700, marginTop: 'auto', color: '#660914' }}>{review.name}</div>
                <div style={{ fontSize: '0.98rem', color: '#7c232c', fontWeight: 400 }}>{review.role}</div>
              </div>
            ))}
          </div>
          <span className="review-arrow" onClick={handleNext} aria-label="Next Review">
            <MdChevronRight />
          </span>
        </div>
        <div className="review-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`review-dot${idx === current ? ' active' : ''}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 