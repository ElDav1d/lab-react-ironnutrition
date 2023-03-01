function FoodItem({ name, image, calories, servings }) {
  return (
    <li style={{ marginBottom: '2rem' }}>
      <img src={image} alt={`A plate of ${name}`} width={100} />
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>Totel Calories: {calories}</p>
      <button>DELETE</button>
    </li>
  );
}

export default FoodItem;
