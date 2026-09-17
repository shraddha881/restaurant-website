function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="/src/assets/hero1.png"
          alt="Lovely Bite Restaurant"
        />
      </div>

      <div className="about-content">

        <h2>About LovelyBite</h2>

        <h3>Good Food, Great Memories</h3>

        <p>
          Welcome to LovelyBite Restaurant, where delicious food
          and a warm atmosphere come together.
        </p>

        <p>
          We prepare our dishes using fresh ingredients and
          traditional flavors to give our customers a memorable
          dining experience.
        </p>

        <button>Learn More</button>

      </div>

    </section>
  );
}

export default About;