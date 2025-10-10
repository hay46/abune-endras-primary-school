import React from "react";
import bagr from "../../../assets/image copy.png";
import "./Hero_page.css";

function Hero_page() {
  const handleScroll = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bagr})` }}
      >
        <div className="overlay">
          <div className="primary-school">
            <h1 className="abune animate-h1">
              <span className="span-me">ABUNE ENDIRASS</span> PRIMARY SCHOOL
            </h1>
            <h2 className="chiled animate-h2">
              every child through quality education, creativity, and discipline.
            </h2>
            <h3 className="school animate-h3">
              ወአንሰ ተሰየምኩ ንጉስ በላአሌሆሙ በዮን በደብረ መደሱ
            </h3>

            <div className="btn-group">
              <button className="hero-btn">Learn More</button>
              <button className="hero-btn-outline">Join Us</button>
            </div>
          </div>

          <div className="scroll-down" onClick={handleScroll}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section id="about-section" className="about-section">
        <h2>About Our School</h2>
        <p>
          Abune Endirass Primary School is dedicated to nurturing the potential
          of every child through quality education, creativity, and discipline.
          We believe every student is intelligent in their own unique way.
        </p>
      </section>
    </>
  );
}

export default Hero_page;
