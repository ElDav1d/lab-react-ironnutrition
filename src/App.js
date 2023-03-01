import data from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {
  const [dishes, setDishes] = useState(data);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="App">
      <AddFoodForm setDishes={setDishes} />
      <Search setSearchInput={setSearchInput} />
      <FoodList dishes={dishes} searchInput={searchInput} />
    </div>
  );
}

export default App;
