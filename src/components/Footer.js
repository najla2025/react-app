import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        {/* Section Informations */}
        <div className="footer-info">
          <h3>À propos</h3>
          <p>Découvrez les dernières actualités, les résultats des matchs, et les statistiques des joueurs de football du monde entier.</p>
        </div>

        {/* Section Contact */}
        <div className="footer-contact">
          <h3>Contactez-nous</h3>
          <p>Email: contact@footballfan.com</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 FootballFan. Tous droits réservés.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
