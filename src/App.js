import data from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodList from './components/FoodList';
import { Button, Row, Col } from 'antd';

function App() {
  const [dishes, setDishes] = useState(data);
  const [searchInput, setSearchInput] = useState('');
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className="App">
      {isFormShown && <AddFoodForm setDishes={setDishes} />}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Button
            type="primary"
            ghost
            onClick={() => setIsFormShown(!isFormShown)}
          >
            {isFormShown ? 'Hide Form' : 'Add New Food'}
          </Button>
        </Col>
        <Col xs={24}>
          <Search setSearchInput={setSearchInput} />
        </Col>
      </Row>
      <FoodList
        dishes={dishes}
        searchInput={searchInput}
        setDishes={setDishes}
      />
    </div>
  );
}

export default App;
