import { Link } from "react-router-dom";
import React from "react";
export default function Home() {
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
      <main
        className="home-main"
        style={{ backgroundImage: `url(/image%2053.png)` }}
      >
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button>Find your van</button>
      </main>
      <footer className="general-footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </>
  );
}
