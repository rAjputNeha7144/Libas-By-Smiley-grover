import "./CTA.css";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta"  id="contact">
      <div className="cta-container">
        <div className="cta-left">
          <span>LET'S CONNECT</span>

          <h2>
            Discover Your
            <br />
            Signature Style
          </h2>

          <p>
            From festive celebrations to everyday elegance, discover carefully
            curated ethnic wear designed to complement your unique style. Let us
            help you find the perfect outfit for every occasion.
          </p>

          <div className="cta-buttons">
            <a href="https://wa.me/8054304223" className="whatsapp-btn">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <a href="https://www.instagram.com/libasbysmileygrover/" className="instagram-btn">
              <FaInstagram size={20} />
              Follow Instagram
            </a>
          </div>
        </div>

        <div className="cta-right">
          <div className="cta-circle">
            <span className="seal-line"></span>

            <h3>CURATED</h3>

            <h2>LIBAS</h2>

            <p>Timeless Elegance</p>

            <span className="seal-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
