'use client';

import React, { useRef, useEffect, useState } from 'react';
import { MdCarRepair, MdBuild, MdSearch, MdAccessTime, MdAcUnit } from 'react-icons/md';

const services = [
  {
    title: 'Car Servicing',
    description: 'Routine maintenance and checks. Oil and filter changes. Brake inspection and replacements.',
    image: '/home/services/Car Servicing.jpg',
    icon: <MdCarRepair size={32} color="#660914" />,
  },
  {
    title: 'Car Repairs',
    description: 'Engine and transmission repairs. Exhaust and suspension work. Electrical system fixes.',
    image: '/home/services/Car Repairs.jpg',
    icon: <MdBuild size={32} color="#660914" />,
  },
  {
    title: 'Vehicle Diagnostics',
    description: 'Advanced computer diagnostics. Warning light investigations. Quick fault identification.',
    image: '/home/services/Vehicle Diagnostics.jpg',
    icon: <MdSearch size={32} color="#660914" />,
  },
  {
    title: 'MOT Repairs and MOT Checks',
    description: 'MOT repairs, pre-MOT checks, and MOT test preparation.',
    image: '/home/services/MOT Repairs & Checks.jpg',
    icon: <MdAccessTime size={32} color="#660914" />,
  },
  {
    title: 'Air Conditioning Service',
    description: 'Complete AC system maintenance. Refrigerant recharge. System diagnostics and repairs.',
    image: '/home/services/Air Conditioning Service.jpg',
    icon: <MdAcUnit size={32} color="#660914" />,
  },
];

function useScrollInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
}

export default function Services() {
  return (
    <section style={{ width: '100%', padding: '48px 0 64px 0', background: '#f7f2f3' }}>
      <style>{`
        .services-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .service-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.4,1,.4,1), transform 0.7s cubic-bezier(.4,1,.4,1), box-shadow 0.3s, transform 0.3s;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(102,9,20,0.07);
          width: 330px;
          min-width: 280px;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .service-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card:hover {
          box-shadow: 0 8px 32px rgba(102,9,20,0.13);
          transform: translateY(-8px) scale(1.03);
        }
        .service-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          background: #eee;
        }
        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(.4,1,.4,1);
        }
        .service-icon-float {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          background: #fff;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(102,9,20,0.12);
          transition: transform 0.5s cubic-bezier(.4,1,.4,1);
          border: 2.5px solid #fff;
        }
        .service-card:hover .service-img,
        .service-card:hover .service-icon-float {
          transform: scale(1.08);
        }
        @media (max-width: 800px) {
          .services-flex {
            flex-direction: column !important;
            gap: 18px !important;
            align-items: center !important;
          }
          section {
            padding: 28px 0 36px 0 !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          div[style*='font-size: 1.1rem'] {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#660914', marginBottom: 8 }}>Our Services</h2>
        <div style={{ color: '#7c232c', fontSize: '1.1rem', marginBottom: 32 }}>
          Professional and reliable transportation services tailored to your needs
        </div>
      </div>
      <div className="services-flex">
        {services.map((service, idx) => {
          const [ref, inView] = useScrollInView();
          return (
            <div
              key={service.title}
              ref={ref}
              className={`service-card${inView ? ' in-view' : ''}`}
            >
              <div className="service-img-wrap">
                <div className="service-icon-float">
                  {service.icon}
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                />
              </div>
              <div style={{ padding: '38px 22px 22px 22px', color: '#660914', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8 }}>{service.title}</div>
                <div style={{ color: '#7c232c', fontSize: '1rem', fontWeight: 400 }}>{service.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 