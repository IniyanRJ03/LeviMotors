import React from 'react';
import Link from 'next/link';

const phone = '01234 567890';
const email = 'levimotors@example.com';
const address = 'Batiicaloa Srilanka';

export default function Footer() {
  return (
    <footer style={{ background: '#f7f2f3', color: '#660914', padding: '40px 0 0 0', fontFamily: 'inherit', fontSize: '1rem', borderTop: '1px solid #e5dada' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px', padding: '0 48px' }}>
        {/* Logo & About */}
        <div style={{ flex: '1 1 260px', minWidth: 220 }}>
          <div style={{ color: '#660914', fontWeight: 700, fontSize: '2rem', fontFamily: 'sans-serif', letterSpacing: '2px', marginBottom: 8 }}>
            LEVI <span style={{ color: '#7c232c', fontWeight: 400 }}>Motors</span>
            <div style={{ fontSize: '0.7rem', color: '#222', fontWeight: 400, letterSpacing: '1px' }}>ALL CAR REPAIRS</div>
          </div>
          <div style={{ color: '#7c232c', fontSize: '1rem', margin: '16px 0 18px 0', maxWidth: 300 }}>
            Your trusted partner for professional car repairs, servicing, and MOT testing in {address}.
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            {/* Social icons: Facebook, TikTok, WhatsApp */}
            <a href="#" aria-label="Facebook" style={{ color: '#1877F3' }}>
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Instagram" style={{ color: '#E4405F' }}>
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp" style={{ color: '#25D366' }}>
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div style={{ flex: '1 1 180px', minWidth: 160 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Quick Links</div>
          <ul style={{ listStyle: 'disc', paddingLeft: 18, color: '#7c232c', lineHeight: 2 }}>
            <li><Link href="/" style={{ color: '#7c232c', textDecoration: 'none' }}>Home</Link></li>
            <li><Link href="/services" style={{ color: '#7c232c', textDecoration: 'none' }}>Services</Link></li>
            <li><Link href="/about" style={{ color: '#7c232c', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/contact" style={{ color: '#7c232c', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>
        {/* Our Services */}
        <div style={{ flex: '1 1 220px', minWidth: 180 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Our Services</div>
          <ul style={{ listStyle: 'disc', paddingLeft: 18, color: '#7c232c', lineHeight: 2 }}>
            <li>Car Repairs</li>
            <li>Car Servicing</li>
            <li>MOT Testing</li>
            <li>Vehicle Diagnostics</li>
            <li>Air Conditioning Service</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div style={{ flex: '1 1 220px', minWidth: 180 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Contact Us</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <svg width="20" height="20" fill="none" stroke="#660914" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            <span>{phone}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <svg width="20" height="20" fill="none" stroke="#660914" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
            <span>{email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <svg width="20" height="20" fill="none" stroke="#660914" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9 5.4c-1.5 2-4.6 5.1-6.1 6.1-1.5-1-4.6-4.1-6.1-6.1A8.38 8.38 0 0 1 3 10.5C3 6.36 6.36 3 10.5 3s7.5 3.36 7.5 7.5z"/></svg>
            <span>{address}</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #e5dada', marginTop: 40, padding: '18px 48px 18px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.98rem', color: '#7c232c', maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto' }}>
        <span>© 2025 LEVI Motors. All rights reserved. <span style={{ fontSize: '0.95em', color: '#660914', marginLeft: 12 }}>Website Developed by 0B</span></span>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: '#7c232c', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#7c232c', textDecoration: 'none' }}>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
} 