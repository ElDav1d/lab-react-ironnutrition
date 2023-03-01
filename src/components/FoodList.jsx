import FoodBox from './FoodBox';

function FoodList({ dishes, searchInput, setDishes }) {
  return (
    <>
      <h2>FoodList</h2>
      {dishes.length ? (
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
                setDishes={setDishes}
                index={index}
              />
            ))}
        </ul>
      ) : (
        <h3>Oooops! There is no more content to show</h3>
      )}
    </>
  );
}

export default FoodList;
