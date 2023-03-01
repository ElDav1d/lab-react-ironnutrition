import { useState } from 'react';

function AddFoodForm({ setDishes }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const clearState = () => {
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDish = { name, image, calories, servings };

    setDishes((dishes) => [newDish, ...dishes]);
    clearState();
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };

  const handleServings = (event) => {
    setServings(event.target.value);
  };

  return (
    <>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br />
        <br />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" value={image} onChange={handleImage} />
        <br />
        <br />
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />
        <br />
        <br />
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />
        <br />
        <br />
        <button>CREATE</button>
      </form>
    </>
  );
}

export default AddFoodForm;
