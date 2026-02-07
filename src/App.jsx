import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-text">Panthéon-Sorbonne</span>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#programmes">Programmes</a></li>
            <li><a href="#excellence">Excellence</a></li>
            <li><a href="#campus">Campus</a></li>
            <li><a href="#contact" className="cta-nav">Nous Contacter</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Université Panthéon-Sorbonne</h1>
          <p className="hero-subtitle">Huit siècles d'excellence académique et de prestige</p>
          <p className="hero-description">
            Une institution fondatrice du savoir qui façonne les penseurs et les leaders de demain
          </p>
          <button className="cta-button">Découvrir nos programmes</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Présentation */}
      <section className="presentation">
        <div className="container">
          <h2>L'Excellence au Service du Savoir</h2>
          <div className="presentation-grid">
            <div className="presentation-card">
              <div className="card-icon">📚</div>
              <h3>Patrimoine Académique</h3>
              <p>Fondée au cœur de Paris, notre université incarne l'excellence française depuis plus de 800 ans.</p>
            </div>
            <div className="presentation-card">
              <div className="card-icon">🎓</div>
              <h3>Formation d'Excellence</h3>
              <p>Des programmes rigoureux conçus par les plus grands experts pour préparer les leaders mondiaux.</p>
            </div>
            <div className="presentation-card">
              <div className="card-icon">🌍</div>
              <h3>Rayonnement International</h3>
              <p>Classée parmi les universités prestigieuses mondialement reconnues en recherche et enseignement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="programmes">
        <div className="container">
          <h2>Nos Programmes Académiques</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-header">
                <h3>Droit & Sciences Politiques</h3>
              </div>
              <p>Maîtrisez les principes fondamentaux du droit français et international avec une expertise inégalée.</p>
              <ul className="program-list">
                <li>Licence en Droit</li>
                <li>Master Droit Public</li>
                <li>Master Droit Privé</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-header">
                <h3>Lettres & Humanités</h3>
              </div>
              <p>Explorez les richesses de la littérature, la philosophie et les sciences humaines.</p>
              <ul className="program-list">
                <li>Licence Lettres Modernes</li>
                <li>Master Littérature Française</li>
                <li>Master Philosophie</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-header">
                <h3>Sciences & Technologie</h3>
              </div>
              <p>Innovez à la frontière de la connaissance avec nos programmes scientifiques de haut niveau.</p>
              <ul className="program-list">
                <li>Licence Sciences</li>
                <li>Master Informatique</li>
                <li>Master Mathématiques Appliquées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence */}
      <section id="excellence" className="excellence">
        <div className="container">
          <h2>Nos Distinctions & Accréditations</h2>
          <div className="excellence-grid">
            <div className="excellence-item">
              <div className="excellence-number">1</div>
              <p>Université française avec le plus ancien enseignement supérieur</p>
            </div>
            <div className="excellence-item">
              <div className="excellence-number">4500+</div>
              <p>Enseignants-chercheurs et personnels d'exception</p>
            </div>
            <div className="excellence-item">
              <div className="excellence-number">32000+</div>
              <p>Étudiants du monde entier</p>
            </div>
            <div className="excellence-item">
              <div className="excellence-number">Top 100</div>
              <p>Classée dans les 100 universités mondiales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="campus">
        <div className="container">
          <h2>Un Campus Prestigieux au Cœur du Quartier Latin</h2>
          <div className="campus-content">
            <div className="campus-text">
              <p>
                Situé au cœur historique de Paris, notre campus conjugue patrimoine architectural avec installations modernes 
                pour créer un environnement d'apprentissage incomparable.
              </p>
              <p>
                Nos bibliothèques, laboratoires de recherche et amphithéâtres historiques offrent un cadre idéal 
                pour l'excellence académique et l'innovation.
              </p>
              <div className="campus-features">
                <div className="feature">🏛️ Architecture historique</div>
                <div className="feature">🔬 Laboratoires modernes</div>
                <div className="feature">📖 Bibliothèques prestigieuses</div>
                <div className="feature">🌳 Espaces verts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Rejoignez l'Université Panthéon-Sorbonne</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact</h3>
              <p>Rue Cujas, 75005 Paris</p>
              <p>+33 (0)1 40 46 27 00</p>
              <p>admissions@pantheonsorbonne.fr</p>
            </div>
            <div className="contact-form">
              <h3>Demande d'Information</h3>
              <form className="form">
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="4" required></textarea>
                <button type="submit" className="submit-btn">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Université Panthéon-Sorbonne. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#mentions">Mentions légales</a>
            <a href="#privacy">Politique de confidentialité</a>
            <a href="#accessibility">Accessibilité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
