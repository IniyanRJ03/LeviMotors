'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const phone = '01234 567890';
const email = 'levimotors@example.com';
const address = '123 Main Street, Randomtown, RT12 3AB';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
        <style>{`
          @media (max-width: 900px) {
            .header-main { padding: 12px 10px !important; }
            .header-main-inner { padding: 0 !important; }
            .desktop-nav, .desktop-call { display: none !important; }
            .mobile-hamburger { display: flex !important; }
            .header-main-inner {
              padding: 0 10px !important;
            }
            .header-main-inner > div:first-child {
              font-size: 1.2rem !important;
            }
            .header-main-inner > div > div {
              font-size: 0.6rem !important;
            }
            .header-main-inner {
              gap: 0 !important;
            }
            .header-main {
              min-height: 64px !important;
            }
            .header-main-inner {
              min-height: 64px !important;
            }
            .mobile-hamburger {
              margin-left: auto !important;
            }
            .topbar-flex {
              flex-direction: column !important;
              gap: 2px !important;
              padding: 0 10px !important;
              font-size: 0.95rem !important;
            }
            .topbar-flex span {
              margin-bottom: 2px !important;
            }
          }
          @media (max-width: 600px) {
            .header-main-inner > div:first-child {
              font-size: 1rem !important;
            }
            .header-main-inner > div > div {
              font-size: 0.5rem !important;
            }
            .header-main, .header-main-inner {
              padding: 0 4px !important;
            }
            .topbar-flex {
              font-size: 0.85rem !important;
              padding: 0 4px !important;
            }
          }
          .nav-link {
            position: relative;
            color: #6a1b2a;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
          }
          .nav-link:hover,
          .nav-link.active {
            color: #a03c5a;
          }
          .nav-link.active::after {
            content: '';
            position: absolute;
            left: 0; right: 0; bottom: -6px;
            height: 3px;
            background: #a03c5a;
            border-radius: 2px;
          }
        `}</style>
        {/* Top Bar */}
        <div style={{ background: 'linear-gradient(90deg, #a03c5a 0%, #e2cfd3 100%)', color: '#fff', fontSize: '15px', padding: '4px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="topbar-flex" style={{ width: '100%', maxWidth: 1440, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 48px' }}>
            <span>Phone: <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: '#fff', textDecoration: 'underline' }}>{phone}</a></span>
            <span>Email: <a href={`mailto:${email}`} style={{ color: '#fff', textDecoration: 'underline' }}>{email}</a></span>
            <span>{address}</span>
          </div>
        </div>
        {/* Main Header */}
        <div className="header-main" style={{ background: 'linear-gradient(90deg, #fff 0%, #e2cfd3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
          <div className="header-main-inner" style={{ width: '100%', maxWidth: 1440, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
            {/* Left: Logo */}
            <div style={{ color: '#6a1b2a', fontWeight: 700, fontSize: '2rem', fontFamily: 'sans-serif', letterSpacing: '2px' }}>
              LEVI <span style={{ color: '#a03c5a', fontWeight: 400 }}>Motors</span>
              <div style={{ fontSize: '0.7rem', color: '#222', fontWeight: 400, letterSpacing: '1px' }}>ALL CAR REPAIRS</div>
            </div>
            {/* Desktop Navigation + Call Now */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
              <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
                {navLinks.map(link => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname === link.href || (typeof window !== 'undefined' && window.location.hash === link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link${isActive ? ' active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="desktop-call" style={{ display: 'flex', alignItems: 'center', background: '#6a1b2a', color: '#fff', border: 'none', borderRadius: '16px', padding: '8px 22px', fontWeight: 500, textDecoration: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                Call Now
              </a>
              {/* Hamburger Icon (Mobile) */}
              <button
                className="mobile-hamburger"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(open => !open)}
                style={{
                  display: 'none', // shown via media query
                  background: 'none',
                  border: 'none',
                  padding: 8,
                  marginLeft: 12,
                  cursor: 'pointer',
                  zIndex: 120,
                }}
              >
                {menuOpen ? (
                  // Close icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#6a1b2a" style={{ width: 32, height: 32 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#6a1b2a" style={{ width: 32, height: 32 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu - outside header, covers below header only */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 108, // 32px top bar + 76px header-main (approx)
            left: 0,
            width: '100vw',
            height: 'calc(100vh - 108px)',
            background: '#fff',
            zIndex: 110,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 36,
            transition: 'all 0.3s',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 28, fontWeight: 600, color: '#6a1b2a', textDecoration: 'none', margin: 0, padding: 0 }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            style={{ display: 'flex', alignItems: 'center', background: '#6a1b2a', color: '#fff', border: 'none', borderRadius: 16, padding: '14px 36px', fontWeight: 500, textDecoration: 'none', fontSize: 22, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            onClick={() => setMenuOpen(false)}
          >
            <span style={{ marginRight: 12, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            Call Now
          </a>
        </div>
      )}
    </>
  );
} 