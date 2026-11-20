function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>LovelyBite</h2>

          <p>
            Delicious food, great taste and beautiful memories.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>123 Food Street, Bengaluru</p>
          <p>+91 98765 43210</p>
          <p>contact@lovelybite.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LovelyBite Restaurant. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;