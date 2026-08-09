
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./Navbar.css";

import logo from "../../assets/Images/libas_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Shop Now
  const handleShopNow = () => {
    document.getElementById("collection")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="Smiley Grover Logo" />

          <div className="logo-text">
            <h3>Smiley Grover</h3>
            <p>Curated Ethnic Collection</p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="nav-links">

          <li>
            <a href="#home">
              Home
            </a>
          </li>

          <a
  href="#collection"
  onClick={(e) => {
    console.log("COLLECTION CLICKED");
    console.log(document.getElementById("collection"));
  }}
>
  Collection
</a>

          {/* <li>
            <a href="#collection">
              Collection
            </a>
          </li> */}

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

        {/* SHOP NOW */}
        <button
          type="button"
          className="shop-btn"
          onClick={handleShopNow}
        >
          Shop Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#collection" onClick={closeMenu}>
            Collection
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <button
            type="button"
            className="mobile-shop-btn"
            onClick={handleShopNow}
          >
            Shop Now
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

