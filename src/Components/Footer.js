import React from 'react';
import './Navfoot.css';
import fb from '../Assets/fb.png'
import insta from '../Assets/insta.png'
import tw from '../Assets/tw.png'
import printrest from '../Assets/printrest.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Bezoekadres</p>
          <p>Veemarktkkade 8</p>
          <p>5222AE ’s-Hertogenbosch</p>
          <p>Telefoon +31 (0)73 820 0231</p>
          <p>Fax +31 (0)73 820 2032</p>
          <p><a href="mailto:info@concapps.nl">info@concapps.nl</a></p>
        </div>
        <div className="footer-column">
          <h3>Sitemap</h3>
          <ul>
            <li>- Pagina’s</li>
            <li>- Berichten</li>
            <li>- Evenementen</li>
            <li>- Gallerijen</li>
            <li>- Locaties</li>
            <li>- Agenda</li>
            <li>- Team</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Custom content</h3>
          <p>Maandag 08:30 - 18:00 uur</p>
          <p>Dinsdag 08:30 - 18:00 uur</p>
          <p>Woensdag 09:00 - 18:00 uur</p>
          <p>Donderdag 09:00 - 18:00 uur</p>
          <p>Vrijdag 09:00 - 17:00 uur</p>
          <p>Zaterdag Gesloten</p>
          <p>Zondag Gesloten</p>
        </div>
      </div>
      <hr />
      <div className="footer-icons">
        <i className="fab fa-facebook-f"> <img src={fb}></img></i>
        <i className="fab fa-twitter"><img src={tw}></img></i>
        <i className="fab fa-pinterest-p"><img src={printrest}></img></i>
        <i className="fab fa-instagram"><img src={insta}></img></i>
      </div>
    </footer>
  );
};

export default Footer;