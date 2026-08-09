import "./Home.css";

import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Collections from "../../components/Collections/Collections";
import About from "../../components/About/About";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Featured from "../../components/Featured/Featured";
import Quote from "../../components/Quote/Quote";
import HowToOrder from "../../components/HowToOrder/HowToOrder";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroVideo1 from "../../assets/videos/herovideo1.mp4";
import heroVideo2 from "../../assets/videos/herovideo2.mp4";
import heroVideo3 from "../../assets/videos/herovideo3.mp4";

const Home = () => {
  const videos = [heroVideo1, heroVideo2, heroVideo3];

  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const card = videoRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-6px)
  `;
  };

  const handleMouseLeave = () => {
    const card = videoRef.current;

    if (!card) return;

    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <Navbar />

      <section id="home" className="home">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">✨ NEW ARRIVALS</span>

            <h1>
              Timeless Fashion <br />
              Designed For Every Occasion
            </h1>

            <p>
              Discover elegant ethnic wear crafted with premium fabrics, modern
              silhouettes, and timeless designs that celebrate every woman.
            </p>

            <div className="hero-buttons">
              
              <button
                className="primary-btn"
                onClick={() =>
                  document.getElementById("collection")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Shop Collection
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="hero-video">
            <div className="circle circle-one"></div>

            <div className="circle circle-two"></div>

            <video
              ref={videoRef}
              key={currentVideo}
              autoPlay
              muted
              playsInline
              className="hero-video-player"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </video>

            <div className="video-dots">
              {videos.map((_, index) => (
                <span
                  key={index}
                  className={currentVideo === index ? "dot active-dot" : "dot"}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-down">Scroll to Discover</div>

      <Collections />

      <About />

      <WhyChoose />

      <Featured />

      <Quote />

      <HowToOrder />

      <CTA />

      <Footer />
    </>
  );
};

export default Home;
