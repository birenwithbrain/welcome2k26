'use client';

import { useState } from 'react';
import { ArrowRight, ArrowDown, CalendarDays, MapPin, Menu, X, Sparkle, Star, Flower2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Event', href: '#event' },
  { label: 'Memories', href: '#memories' },
];

const values = [
  { title: 'People', description: 'New faces' },
  { title: 'Stories', description: 'New friendships' },
  { title: 'Opportunities', description: 'New possibilities' },
  { title: 'A brighter tomorrow', description: '' },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" id="home" aria-label="Zenith welcome">
        <div className="hero-shade" />
        <header className="site-header">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Zenith home">
            <span className="brand-name">ZENITH</span><span className="brand-star">✦</span><span className="brand-sub">BCA FRESHERS 2026</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </nav>
          <a href="#invitation" className="header-cta">You’re invited <Sparkle size={12} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <a href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>)}
          <a href="#invitation" onClick={closeMenu}>You’re invited <ArrowRight size={14} /></a>
        </nav>}

        <aside className="hero-left-rail" aria-hidden="true">
          <span className="rail-line" />
          <span>People</span><span>Ideas</span><span>Opportunities</span><span>A brighter</span><span>tomorrow</span>
          <span className="rail-line rail-bottom" />
        </aside>
        <aside className="hero-page-index" aria-hidden="true"><span>01</span><span>✧</span><span>⌁</span></aside>

        <div className="hero-copy">
          <p className="eyebrow">A new batch. A brighter tomorrow.</p>
          <h1>ZENITH</h1>
          <p className="hero-subtitle">A celebration of new beginnings</p>
          <a className="outline-cta" href="#invitation">You’re warmly invited <ArrowRight size={17} /></a>
        </div>

        <div className="hero-right-phrase" aria-hidden="true">Same<br />curiosity<br /><span>New</span><br />horizons</div>
        <a href="#invitation" className="scroll-cue"><span className="scroll-orb"><ArrowDown size={14} /></span><span>Scroll</span></a>
        <div className="floating-petals" aria-hidden="true">
          <span className="petal petal-a"/><span className="petal petal-b"/><span className="petal petal-c"/><span className="petal petal-d"/>
        </div>
      </section>

      <section className="invitation-section section-shell" id="invitation">
        <div className="invitation-card">
          <div className="paper-ticket">
            <div className="paper-kicker"><span>The invitation</span><i /></div>
            <h2>Let’s Make<br /><em>A Beginning</em></h2>
            <p>An evening to welcome fresh minds, celebrate new journeys, and create memories that stay beyond the classroom.</p>
            <div className="ticket-footer"><i /><span>✦</span><i /><small>BCA FRESHERS 2026</small></div>
          </div>
          <div className="flower-stage" aria-hidden="true">
            <div className="flower-halo" />
            <img className="flower-orb" src="/images/Ethereal-Golden.png" alt="" />
            <img className="stage-petal stage-petal-1" src="/images/petal.svg" alt="" />
            <img className="stage-petal stage-petal-2" src="/images/petal.svg" alt="" />
            <img className="stage-petal stage-petal-3" src="/images/petal.svg" alt="" />
            <span className="flower-spark spark-one">✦</span><span className="flower-spark spark-two">✧</span>
          </div>
          <div className="values-list">
            {values.map((value) => <div className="value-row" key={value.title}>
              <span className="value-icon"><Star size={13} /></span>
              <div><h3>{value.title}</h3>{value.description && <p>{value.description}</p>}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="event-section section-shell" id="event">
        <div className="city-glow" aria-hidden="true" />
        <div className="event-intro">
          <div className="section-kicker"><span>When &amp; where</span><i /></div>
          <h2>Mark Your<br /><em>Calendar</em></h2>
          <p>Be part of an evening filled with introductions, interactions and inspirations.</p>
        </div>
        <div className="event-cards">
          <article className="event-card">
            <span className="event-icon"><CalendarDays size={25} strokeWidth={1.4} /></span>
            <div className="event-info"><span className="event-label">Date</span><h3>Coming Soon</h3><a href="#memories" className="stay-tuned">Stay tuned</a></div>
            <span className="card-corner card-corner-tr"/><span className="card-corner card-corner-bl"/>
          </article>
          <article className="event-card">
            <span className="event-icon"><MapPin size={27} strokeWidth={1.45} /></span>
            <div className="event-info"><span className="event-label">Venue</span><h3>Centenary Hall</h3><p className="event-caption">The celebration awaits</p><span className="mini-star">✦</span></div>
            <span className="card-corner card-corner-tr"/><span className="card-corner card-corner-bl"/>
          </article>
        </div>
      </section>

      <section className="memories-section" id="memories">
        <div className="memories-rule"><span>✦</span></div>
        <p className="eyebrow">A night to remember</p>
        <h2>Every beginning<br /><em>becomes a story.</em></h2>
        <p className="memories-copy">New faces. New stories. A thousand possibilities waiting to unfold.</p>
        <a href="#home" className="back-top">Return to the beginning <ArrowRight size={15} /></a>
      </section>

      <footer className="site-footer"><a href="#home" className="footer-brand">ZENITH <span>✦</span></a><span>BCA FRESHERS 2026</span><span> A celebration of new beginnings</span></footer>
    </main>
  );
}
