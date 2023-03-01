import data from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';

function App() {
  const [dishes, setDishes] = useState(data);

  return (
    <div className="App">
      <AddFoodForm setDishes={setDishes} />
      <FoodList dishes={dishes}/>
    </div>
  );
}

export default App;
