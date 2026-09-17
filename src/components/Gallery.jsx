import pizzaImage from "../assets/pizza.jpg";
import burgarImage from "../assets/burgar.jpg";
import pastaImage from "../assets/pasta.jpg";
import restaurantImage from "../assets/restaurant-banner.jpg";
import hero1Image from "../assets/hero1.png";




function Gallery() {
    return(
        <section className="gallery" id="gallery">
            <h2>Our Gallery</h2>
            <p className="gallery-description">Have a look at our delicious food and beautiful restaurant</p>
        <div className="gallery-container">
            <div className="gallery-item">
                <img src={pizzaImage} alt="Delicious pizza"/>
            </div>
            <div className="gallery-item">
                <img src={burgarImage} alt="Classic burgar"/>
            </div>
            <div className="gallery-item">
                <img src={pastaImage} alt="Creamy pasta"/>
            </div>
             <div className="gallery-item">
          <img src={restaurantImage} alt="Restaurant Interior" />
        </div>
        <div className="gallery-item">
          <img src={hero1Image} alt="LovelyBite Restaurant" />
        </div>
        </div>


        </section>
 
    );
}
export default Gallery;