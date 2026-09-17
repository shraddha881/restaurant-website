function FoodCard({ name, image, description, price }) {
  return (
    <div className="food-card">

      <img
        src={image}
        alt={name}
        className="food-image"
      />

      <h3>{name}</h3>

      <p>{description}</p>

      <span>{price}</span>

    </div>
  );
}

export default FoodCard;