'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO - full screen slider area */}
      <section style={{
        position: 'relative', width: '100%', height: 'calc(100vh - 72px)',
        background: '#1a1a1a', display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden', minHeight: '500px'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'grayscale(100%)', opacity: 0.5
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        {/* Slider arrows */}
        <button style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(80,80,80,0.7)', border: 'none', color: '#fff',
          width: 48, height: 48, fontSize: '1.4rem', cursor: 'pointer', zIndex: 2
        }}>&#8249;</button>
        <button style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(80,80,80,0.7)', border: 'none', color: '#fff',
          width: 48, height: 48, fontSize: '1.4rem', cursor: 'pointer', zIndex: 2
        }}>&#8250;</button>
      </section>

      {/* ABOUT - dark charcoal box */}
      <section className="section-dark">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#cccccc', marginBottom: '2rem' }}>
            At still88, our foundation is built on unwavering commitments—to our dedicated team
            members, the communities we serve and our investors. Our investment philosophy is
            straightforward: we focus on creating sustainable, measured value. By employing
            established methodologies and innovative strategies, still88 has developed a proven
            track record in identifying and seizing commercial investment opportunities that yield
            exceptional returns. We are dedicated to not just meeting expectations, but exceeding
            them, fostering growth and success for all involved.
          </p>
          <Link href="/services" className="btn-outline">READ MORE ›</Link>
        </div>
      </section>

      {/* OUR PARTNERS */}
      <section className="section-light">
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading">Our <span>Partners</span></h2>
          <div className="heading-rule" />
          <div className="partners-grid">
            {/* Kriya Hotels */}
            <div>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.7rem', color: '#555', fontWeight: 300, letterSpacing: '0.02em' }}>
                kri<span style={{ position:'relative' }}>y</span>a
                <span style={{ fontWeight: 700, marginLeft: '0.3rem', display: 'block', fontSize: '0.9rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888' }}>HOTELS</span>
              </p>
            </div>
            {/* Hilton */}
            <div style={{ border: '2px solid #222', padding: '0.6rem 2rem', display: 'inline-flex', alignItems: 'center' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a' }}>Hilton</p>
            </div>
            {/* Marriott */}
            <div>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#333', letterSpacing: '0.04em' }}>
                <span style={{ fontStyle: 'italic' }}>M</span>arriott
              </p>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: '#666', marginTop: '2px' }}>INTERNATIONAL</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
