import FoodItem from './FoodItem';
function FoodList({ dishes }) {
  console.log(dishes);
  return (
    <>
      <h2>FoodList</h2>
      <ul>
        {dishes.map(({ name, image }, index) => (
          <FoodItem name={name} image={image} key={name + index}></FoodItem>
        ))}
      </ul>
    </>
  );
}

export default FoodList;
