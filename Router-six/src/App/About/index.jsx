import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <header className="general-header">
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="about-main">
        <div className="about-main-img">
          <img src="/image cover caravan.png"></img>
        </div>
        <section className="about-right-section">
          <div className="about-main-summary">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              {" "}
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="about-main-button">
            <h3>Your destination is waiting. </h3>
            <h3>Your van is ready.</h3>
            <button>Explore our vans</button>
          </div>
        </section>
      </main>
      <footer className="general-footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </>
  );
}
