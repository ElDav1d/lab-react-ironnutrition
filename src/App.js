import data from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {
  const [dishes, setDishes] = useState(data);
  const [searchInput, setSearchInput] = useState('');
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className="App">
      {isFormShown && <AddFoodForm setDishes={setDishes} />}
      <button onClick={() => setIsFormShown(!isFormShown)}>
        {isFormShown ? 'Hide Form' : 'Add New Food'}
      </button>
      <br />
      <Search setSearchInput={setSearchInput} />
      <FoodList
        dishes={dishes}
        searchInput={searchInput}
        setDishes={setDishes}
      />
    </div>
  );
}

export default App;
