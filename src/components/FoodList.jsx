import FoodBox from './FoodBox';
import { Typography, Row, Divider } from 'antd';
const { Title } = Typography;

function FoodList({ dishes, searchInput, setDishes }) {
  return (
    <>
      <Divider>
        <Title level={3}>FoodList</Title>
      </Divider>
      {dishes.length ? (
        <Row gutter={[16, 16]} role="list">
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
        </Row>
      ) : (
        <h3>Oooops! There is no more content to show</h3>
      )}
    </>
  );
}

export default FoodList;
