import heroImg from './assets/hero.png'
import './App.css'

const services = [
  {
    title: 'Brand clarity',
    text: 'Positioning, messaging, and visuals that help your audience understand the value you bring.',
  },
  {
    title: 'Client experience',
    text: 'A calm, polished journey from first visit to booked call with clear next steps at every stage.',
  },
  {
    title: 'Conversion-focused design',
    text: 'Layout, hierarchy, and calls to action designed to guide visitors toward taking the next step.',
  },
]

const highlights = ['Warm, editorial styling', 'Mobile-first responsive layout', 'Elegant conversion flow']

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Brittany Corde</p>
          <h1>Elegant web presence for a brand that feels warm, calm, and clear.</h1>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="section-label">Branding, design, and client experience</p>
            <h2>A polished site that reflects your work and makes it easy to take action.</h2>
            <p className="hero-text">
              This homepage now renders the intended Brittany Corde content instead of the default Vite starter screen.
              The layout is built around the brand palette, editorial typography, and a simple conversion path.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#contact">
                Book a consultation
              </a>
              <a className="button button-secondary" href="#services">
                View services
              </a>
            </div>
            <ul className="highlights" aria-label="Highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-media">
            <img src={heroImg} alt="Brittany Corde portrait" />
          </div>
        </section>

        <section className="content-grid" id="about">
          <article className="card intro-card">
            <p className="section-label">About the brand</p>
            <h2>Thoughtful structure with a softer, more editorial feel.</h2>
            <p>
              The page uses a warm amber and deep teal palette, with generous spacing and clear hierarchy to keep the
              experience calm and professional across screen sizes.
            </p>
          </article>

          <article className="card quote-card">
            <p className="quote-mark">“</p>
            <p>
              Designed to feel approachable without losing authority, so the message stays clear from the first
              glance to the final call to action.
            </p>
          </article>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>Built to support clarity, trust, and bookings.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section card" id="contact">
          <div>
            <p className="section-label">Contact</p>
            <h2>Ready for a site that looks like the work you want to attract?</h2>
          </div>
          <a className="button button-primary" href="mailto:hello@brittanycorde.com">
            Start the conversation
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>Brittany Corde</p>
        <p>Warm design. Clear messaging. Confident next steps.</p>
      </footer>
    </div>
  )
}

export default App
