function FoodItem({ name, image, calories, servings, setDishes, index }) {
  const handleDelete = () => {
    setDishes((dishes) => {
      const newDishes = [...dishes];
      newDishes.splice(index, 1);
      return newDishes;
    });
  };
  return (
    <li style={{ marginBottom: '2rem' }}>
      <img src={image} alt={`A plate of ${name}`} width={100} />
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>Total Calories: {calories * servings}</p>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default FoodItem;
