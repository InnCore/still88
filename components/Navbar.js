'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/careers', label: 'CAREERS' },
  ];

  const isActive = (href) => href === '/' ? path === '/' : path.startsWith(href);

  return (
    <nav className="navbar">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="logo-wrap">
          <span className="logo-still">still</span>
          <span className="logo-88">88</span>
        </Link>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'none' }} className="hamburger" aria-label="Menu">
          {[0,1,2].map(i => <div key={i} style={{ width:24, height:2, background:'#ccc', margin:'5px 0' }} />)}
        </button>
      </div>
      {open && (
        <div style={{ background:'#111', borderTop:'1px solid #333' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}
              style={{ display:'block', padding:'0.9rem 2rem', borderBottom:'1px solid #222' }}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; flex-direction: column; }
          nav > div > div { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
