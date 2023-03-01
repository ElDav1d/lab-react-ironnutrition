import data from './foods.json';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodList dishes={data} />
    </div>
  );
}

export default App;
