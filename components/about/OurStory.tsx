import React from 'react';

export default function OurStory() {
  return (
    <section style={{ width: '100%', padding: '56px 0 80px 0', background: '#f7f2f3' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 48,
        padding: '0 24px',
      }}>
        {/* Left: Image */}
        <div style={{ flex: '1 1 380px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/home/services/Car Repairs.jpg"
            alt="Our Story - Car Repairs"
            style={{
              width: 420,
              maxWidth: '100%',
              borderRadius: 18,
              boxShadow: '0 4px 32px rgba(102,9,20,0.10)',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* Right: Story */}
        <div style={{ flex: '2 1 420px', minWidth: 300 }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#660914', marginBottom: 18 }}>
            Our Story
          </h2>
          <p style={{ color: '#7c232c', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
            Founded as a family-run business, Levi Motors has grown from a small local garage into a trusted name in Gravesend and beyond. Our journey began with a passion for cars and a commitment to honest, reliable service. Over the years, we have built lasting relationships with our customers, always putting their needs first. Today, our showroom and workshop combine state-of-the-art technology with traditional values, ensuring every customer receives the highest standard of care—whether it’s a simple MOT or a complex repair. We’re proud of our story and grateful to be part of this community.
          </p>
        </div>
      </div>
    </section>
  );
}
