import "./Footer.css";
import logo from "../../assets/Images/libas_logo.jpg";

import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}

        <div className="footer-brand">
          <img src={logo} alt="Libas Logo" />

          <h3>LIBAS</h3>

          <span>Curated Ethnic Collection</span>

          <p>
            Discover timeless ethnic wear crafted with elegance, comfort, and
            premium quality for every occasion.
          </p>
        </div>

        {/* Links */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>📍 Gurdaspur, Punjab</p>

          <p>📞 +91 8054304223</p>

          {/* <p>✉ hello@libas.com</p>    */}
        </div>

        {/* Social */}

        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/libasbysmileygrover/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/8054304223"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* <a
              href="https://www.facebook.com/LibasBySmileyGrover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Libas. All Rights Reserved.</p>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
