import FoodBox from './FoodBox';

function FoodList({ dishes }) {
  console.log(dishes);
  return (
    <>
      <h2>FoodList</h2>
      <ul>
        {dishes.map(({ name, image, calories, servings }, index) => (
          <FoodBox
            name={name}
            image={image}
            calories={calories}
            servings={servings}
            key={name + index}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodList;
