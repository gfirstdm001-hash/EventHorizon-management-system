import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  return (
    <div className="header">
      <nav>
        <h2>EventHorizon</h2>

        <div className="nav-links">
          <a href="#home">Home</a>

          <a href="#events">Explore Events</a>
          
          <a href="#about">About Us</a>
        </div>

        <div className="nav-buttons">
          <button>Log In</button>
          <button>Create Account</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <p>YOUR TECH COMMUNITY STARTS HERE</p>

        <h1>Welcome to EventHorizon!</h1>

        <p>Let's find you events that suit you.</p>

        <button>Explore Events</button>
      </section>
    </div>
  );
}

export default App;

