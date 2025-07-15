'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
        {/* Main Header */}
        <div className="header-main" style={{ background: 'linear-gradient(90deg, #fff 0%, #e2cfd3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
          <div className="header-main-inner" style={{ width: '100%', maxWidth: 1440, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
            {/* Left: Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <img
                src="/logo1.png"
                alt="Levi Motors Logo"
                style={{
                  width: 68,
                  height: 68,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 12px rgba(102,9,20,0.13))',
                  background: 'linear-gradient(120deg, #fff 0%, #e2cfd3 100%)',
                  borderRadius: 18,
                  padding: 4,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ color: '#6a1b2a', fontWeight: 700, fontSize: '2rem', fontFamily: 'sans-serif', letterSpacing: '2px', lineHeight: 1 }}>LEVI <span style={{ color: '#a03c5a', fontWeight: 400 }}>Motors</span></span>
                <div style={{ fontSize: '0.7rem', color: '#222', fontWeight: 400, letterSpacing: '1px', lineHeight: 1 }}>ALL CAR REPAIRS</div>
              </div>
            </div>
            {/* Desktop Navigation */}
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
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(30, 8, 20, 0.45)',
              zIndex: 109,
              transition: 'background 0.3s',
            }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="mobile-menu-card"
            style={{
              position: 'fixed',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '92vw',
              maxWidth: 400,
              background: '#fff',
              borderRadius: 24,
              boxShadow: '0 8px 32px rgba(102,9,20,0.18)',
              zIndex: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '36px 0 32px 0',
              animation: 'menu-slide-fade-in 0.38s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 24,
                background: 'none',
                border: 'none',
                padding: 8,
                cursor: 'pointer',
                zIndex: 121,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#6a1b2a" style={{ width: 32, height: 32 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, marginTop: 24 }}>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 28, fontWeight: 700, color: '#6a1b2a', textDecoration: 'none', letterSpacing: 1, padding: '8px 0', borderRadius: 12, width: '80%', textAlign: 'center', transition: 'background 0.2s, color 0.2s' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes menu-slide-fade-in {
              0% { opacity: 0; transform: translate(-50%, -40px); }
              100% { opacity: 1; transform: translate(-50%, 0); }
            }
            .mobile-menu-card a:hover {
              background: #f7e6ea;
              color: #a03c5a;
            }
            @media (max-width: 500px) {
              .mobile-menu-card {
                max-width: 98vw !important;
                border-radius: 0 0 24px 24px !important;
                padding: 24px 0 24px 0 !important;
              }
              .mobile-menu-card a {
                font-size: 1.2rem !important;
                padding: 12px 0 !important;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
} 