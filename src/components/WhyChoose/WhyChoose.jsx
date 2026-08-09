import "./WhyChoose.css";
import { Sparkles, Scissors, Globe, HeartHandshake } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="why">

      <div className="why-heading">

        <span>WHY CHOOSE LIBAS</span>

        <h2>Experience Fashion Beyond Clothing</h2>

        <p>
          Every outfit is thoughtfully curated to offer elegance, comfort,
          and confidence for every occasion.
        </p>

      </div>

      <div className="why-grid">

        <div className="why-card">

          <div className="why-icon">
    <Sparkles />
</div>

          <h3>Premium Fabrics</h3>

          <p>
            Carefully selected materials that feel luxurious and comfortable.
          </p>

        </div>

        <div className="why-card">

          <div className="why-icon">
    <Scissors />
</div>

          <h3>Handpicked Designs</h3>

          <p>
            Elegant collections inspired by timeless fashion and modern trends.
          </p>

        </div>

        <div className="why-card">

          <div className="why-icon">
    <Globe />
</div>

          <h3>Worldwide Delivery</h3>

          <p>
            Delivering our collections safely to customers across the globe.
          </p>

        </div>

        <div className="why-card">

          <div className="why-icon">
    <HeartHandshake />
</div>

          <h3>Customer First</h3>

          <p>
            Dedicated support and a seamless shopping experience from start to finish.
          </p>

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;