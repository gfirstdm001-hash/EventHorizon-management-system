import eventsImage from './assets/image.jpg'
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

      <section className="upcoming-events" id="events">
        <p>
          Discover the latest tech events happening in your area. From workshops
          to conferences, find events that match your interests and connect with
          like-minded individuals.
        </p>
        <h2>Upcoming Events</h2>
        <p>Your next experience, Just a click away</p>

        <div className="event-buttons">
          <button>All Events</button>
          <button>Workshops</button>
          <button>Meetups</button>
          <button>Conferences</button>
        </div>

        <div className="event-image" id="Eventcards">
          <img src={eventsImage} alt="AI and tech setup" />
        </div>

        <div className="event-card1">
          <p className="event-card1-text">WORKSHOP</p>
          <h3 className="event-card1-heading">AI Builders Meetup</h3>
          <p className="event-card1-time">📅 October 23, 2026 . 10:00AM</p>
          <p className="event-card1-date">📍 Portharcourt, Nigeria</p>
        </div>
      </section>
    </div>
  )
}

export default App
