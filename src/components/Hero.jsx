import bannerImage from "../assets/restaurant-banner.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero-content">
        <h1>Welcome to LovelyBite Restaurant</h1>

        <h2>Delicious Food. Great Taste.</h2>

        <p>
          Enjoy fresh and delicious food made with love.
        </p>

        <button>Explore Menu</button>
      </div>
    </section>
  );
}

export default Hero;