import { Button, Card, Col, Image } from 'antd';

function FoodItem({ name, image, calories, servings, setDishes, index }) {
  const handleDelete = () => {
    setDishes((dishes) => {
      const newDishes = [...dishes];
      newDishes.splice(index, 1);
      return newDishes;
    });
  };
  return (
    <Col role="listitem" xs={24} sm={18} md={12} lg={6} xl={4}>
      <Card title={name} hoverable size="small" style={{ height: 300 }}>
        <Image src={image} alt={`A plate of ${name}`} height={75} />
        <p>Calories: {calories}</p>
        <p>
          Servings: <b>{servings}</b>
        </p>
        <p>
          <b>Total Calories: {calories * servings}</b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}>
          DELETE
        </Button>
      </Card>
    </Col>
  );
}

export default FoodItem;
