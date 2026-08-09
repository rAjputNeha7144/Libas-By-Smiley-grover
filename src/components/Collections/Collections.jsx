import "./Collections.css";

import collection1 from "../../assets/Images/collection1.jpg";
import collection2 from "../../assets/Images/collection2.jpg";
import collection3 from "../../assets/Images/collection3.jpg";
import collection4 from "../../assets/Images/collection4.jpg";
import collection5 from "../../assets/Images/collection5.jpg";
import collection6 from "../../assets/Images/collection6.jpg";

const collections = [
  {
    image: collection1,
    title: "Elegant Ethnic Wear",
    description: "Graceful outfits designed for every celebration.",
  },
  {
    image: collection2,
    title: "Festive Collection",
    description: "Premium styles crafted with timeless elegance.",
  },
  {
    image: collection3,
    title: "Designer Suits",
    description: "Luxury fashion with modern silhouettes.",
  },
  {
    image: collection4,
    title: "Wedding Collection",
    description: "Beautiful ensembles for unforgettable occasions.",
  },
  {
    image: collection5,
    title: "Party Wear",
    description: "Stand out with sophisticated ethnic fashion.",
  },
  {
    image: collection6,
    title: "Daily Elegance",
    description: "Comfort meets style in every outfit.",
  },
];

const Collections = () => {
  return (
    <section id="collection" className="collection-section">
      <div className="collection-heading">
        <span>OUR COLLECTION</span>

        <h2>Crafted For Every Celebration</h2>

        <p>
          Discover timeless ethnic wear designed with elegance, comfort and
          premium craftsmanship.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((item, index) => (
          <div className="collection-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button
                onClick={() =>
                  document.getElementById("featured")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
