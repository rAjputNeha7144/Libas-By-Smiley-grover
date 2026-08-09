import "./Featured.css";

import image6 from "../../assets/Images/collection6.jpg";
import image7 from "../../assets/Images/collection7.jpg";
import image3 from "../../assets/Images/collection3.jpg";
import image9 from "../../assets/Images/collection9.jpg";
import image10 from "../../assets/Images/collection10.jpg";
import image11 from "../../assets/Images/collection11.jpg";

const collections = [
  {
    image: image6,
    category: "NEW ARRIVAL",
    title: "Festive Elegance",
    desc: "Gracefully crafted outfits designed for weddings and celebrations.",
  },
  {
    image: image7,
    category: "SIGNATURE",
    title: "Royal Heritage",
    desc: "Classic ethnic wear inspired by timeless traditions.",
  },
  {
    image: image3,
    category: "PREMIUM",
    title: "Evening Grace",
    desc: "Elegant styles for unforgettable evening occasions.",
  },
  {
    image: image9,
    category: "EXCLUSIVE",
    title: "Wedding Collection",
    desc: "Beautiful ensembles designed to make every celebration memorable.",
  },
  {
    image: image10,
    category: "TRENDING",
    title: "Modern Ethnic",
    desc: "Contemporary silhouettes with timeless sophistication.",
  },
  {
    image: image11,
    category: "LIMITED",
    title: "Celebration Wear",
    desc: "Curated designs that combine luxury with comfort.",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="featured">

      <div className="featured-heading">

        <span>FEATURED COLLECTIONS</span>

        <h2>Discover Our Signature Styles</h2>

        <p>
          Explore thoughtfully curated collections that blend timeless elegance
          with modern sophistication.
        </p>

      </div>

      <div className="featured-wrapper">

        {collections.map((item, index) => (

          <div className="featured-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="featured-overlay">

              <span>{item.category}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              {/* <button>Discover Collection →</button> */}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Featured;