import FoodBox from './FoodBox';

function FoodList({ dishes, searchInput }) {
  return (
    <>
      <h2>FoodList</h2>
      <ul>
        {dishes
          .filter((dish) =>
            dish.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map(({ name, image, calories, servings }, index) => (
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
