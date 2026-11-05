import {
  Search,
  Heart,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Menu,
  Music2,
  Ticket
} from 'lucide-react';

const sections = [
  'Discover',
  'Explore',
  'Clubs',
  'Artists',
  'Calendar'
];

function App() {
  return (
    <main className="app">
      <header className="header">
        <a className="brand" href="#">KULT<span>.</span></a>
        <span className="brand-caption">ELECTRONIC CULTURE</span>
        <button className="menu-button" aria-label="Abrir menú">
          <Menu size={22} />
        </button>
        <nav className="desktop-nav">
          {sections.map((section) => (
            <a href={`#${section.toLowerCase()}`} key={section}>
              {section}
            </a>
          ))}
        </nav>
        <a className="saved-link" href="#saved">
          <Heart size={17} /> Saved
        </a>
      </header>

      <section className="hero">
        <div className="hero-image">
          <div className="hero-overlay">
            <span className="eyebrow">MEDELLÍN · COLOMBIA</span>
            <h1>DISCOVER<br />THE SCENE<span>.</span></h1>
            <p>
              Your guide to electronic music,
              clubs and experiences in Medellín.
            </p>
            <a href="#explore" className="discover-button">
              EXPLORE EVENTS <ArrowUpRight size={17} />
            </a>
          </div>
          <span className="image-caption">ELECTRONIC CULTURE / 001</span>
        </div>
      </section>

      <section className="intro" id="discover">
        <div>
          <span className="eyebrow">THE CITY. THE MUSIC. THE PEOPLE.</span>
          <h2>Find your place<br />in the scene.</h2>
        </div>
        <p>
          Discover electronic music events, explore venues
          and connect with the artists shaping Medellín.
        </p>
      </section>

      <section className="events-section" id="explore">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT'S HAPPENING</span>
            <h2>Upcoming events<span>.</span></h2>
          </div>
          <a href="#explore">EXPLORE ALL <ArrowUpRight size={15} /></a>
        </div>

        <div className="empty-events">
          <CalendarDays size={27} />
          <h3>The scene is waiting.</h3>
          <p>
            Upcoming events will appear here once
            verified information has been added.
          </p>
          <span>NO VERIFIED EVENTS YET</span>
        </div>
      </section>

      <section className="discovery-grid">
        <a href="#clubs" className="discovery-card" id="clubs">
          <MapPin size={19} />
          <span>01 / DISCOVER PLACES</span>
          <h3>Clubs &<br />Venues</h3>
          <ArrowUpRight size={20} />
        </a>
        <a href="#artists" className="discovery-card" id="artists">
          <Music2 size={19} />
          <span>02 / DISCOVER PEOPLE</span>
          <h3>DJs &<br />Artists</h3>
          <ArrowUpRight size={20} />
        </a>
        <a href="#saved" className="discovery-card" id="saved">
          <Heart size={19} />
          <span>03 / YOUR SELECTION</span>
          <h3>Saved<br />Experiences</h3>
          <ArrowUpRight size={20} />
        </a>
        <a href="#calendar" className="discovery-card" id="calendar">
          <Ticket size={19} />
          <span>04 / PLAN AHEAD</span>
          <h3>Event<br />Calendar</h3>
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer>
        <a className="brand" href="#">KULT<span>.</span></a>
        <span>ELECTRONIC CULTURE · MEDELLÍN</span>
        <span>DISCOVER THE SCENE</span>
      </footer>
    </main>
  );
}

export default App;
