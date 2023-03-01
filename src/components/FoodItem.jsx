function FoodItem({ name, image }) {
  return (
    <li>
      <img src={image} alt={`A plate of ${name}`} width={100} />
      <h3>{name}</h3>
    </li>
  );
}

export default FoodItem;
