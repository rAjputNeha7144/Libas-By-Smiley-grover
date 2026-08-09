import "./About.css";
import aboutImage from "../../assets/Images/about.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame">
            <img src={aboutImage} alt="Libas Fashion" />

            <div className="floating-badge">
              <h3>100+</h3>

              <span>Designs</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-tag">THE BRAND</span>

          <h3>
            Where Tradition Meets
            <br />
            Modern Elegance
          </h3>

          <p>
            At Libas, fashion is more than clothing—it's an expression of
            elegance, confidence, and individuality. Every outfit is
            thoughtfully curated using premium fabrics and timeless
            craftsmanship, blending tradition with modern sophistication.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Premium Fabrics</h4>

                <p>Soft, luxurious materials chosen for comfort.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Handpicked Designs</h4>

                <p>Modern silhouettes inspired by timeless traditions.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Elegant Craftsmanship</h4>

                <p>Every detail finished with precision and care.</p>
              </div>
            </div>
          </div>
          
          <button
            className="about-btn"
            onClick={() =>
              document.getElementById("featured")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Explore Collection →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
