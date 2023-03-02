import { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Typography,
  Button,
  Divider,
  Row,
  Col,
} from 'antd';
const { Title } = Typography;

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
      <Divider>
        <Title level={2}>Add Food Entry</Title>
      </Divider>
      <Form style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Name"
              name="username"
              initialValue={name}
              onChange={handleName}
              rules={[
                {
                  required: true,
                  message: 'Please input the name of the dish username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Image"
              name="image"
              initialValue={image}
              onChange={handleImage}
              rules={[
                {
                  required: true,
                  message: 'Please input the URL of the dish picture!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12} md={6}>
            <Form.Item
              label="Calories"
              name="calories"
              initialValue={calories}
              onChange={handleCalories}
              rules={[
                {
                  required: true,
                  message: 'Please input the calories of your dish!',
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col xs={12} md={6}>
            <Form.Item
              label="Servings"
              name="servings"
              initialValue={servings}
              onChange={handleServings}
              rules={[
                {
                  required: true,
                  message: 'Please input 1 to 10 servings!',
                },
              ]}
            >
              <InputNumber min={1} max={10} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Button type="primary" onClick={handleSubmit}>
              CREATE
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddFoodForm;
