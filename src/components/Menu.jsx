import FoodCard from "./FoodCard";

import pizzaImage from "../assets/pizza.jpg";
import burgarImage from "../assets/burgar.jpg";
import pastaImage from "../assets/pasta.jpg";

const menuItems = [
  {
    name: "Margherita Pizza",
    image: pizzaImage,
    description: "Tomato, cheese and basil.",
    price: "Rs.399"
  },
  {
    name: "Classic Burger",
    image: burgarImage,
    description: "Juicy grilled patty with fresh vegetables and cheese.",
    price: "Rs.199"
  },
  {
    name: "Creamy Pasta",
    image: pastaImage,
    description: "Delicious pasta prepared with creamy sauce and herbs.",
    price: "Rs.299"
  }
];

function Menu() {
  return (
    <section className="menu" id="menu">

      <h2>Our Menu</h2>

      <p className="menu-description">
        Explore some of our delicious dishes.
      </p>

      <div className="menu-container">

        {menuItems.map((item) => (
          <FoodCard
            key={item.name}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}

      </div>

    </section>
  );
}

export default Menu;