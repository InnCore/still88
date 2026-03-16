import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#555', fontSize: '1.4rem', fontWeight: 300 }}>still</span>
            <span style={{ color: '#3b5bdb', fontSize: '1.6rem', fontStyle: 'italic', fontWeight: 700, fontFamily: 'Georgia, serif' }}>88</span>
          </div>
          <a href="mailto:info@still88.com" style={{ color: '#666', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            ✉ info@still88.com
          </a>
        </div>
        <p style={{ color: '#888', fontSize: '0.8rem' }}>Copyright © 2012 still88. • All rights reserved</p>
      </div>
    </footer>
  );
}
