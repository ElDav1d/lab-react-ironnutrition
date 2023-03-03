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
  const cleanState = {
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  };

  const [formInput, setFormInput] = useState(cleanState); // *t he more fields, the more optim an object is!!

  const clearState = () => {
    setFormInput(cleanState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setDishes((dishes) => [formInput, ...dishes]);
    clearState();
  };

  const handleInput = (event) => {
    const newState = { ...formInput };
    if (event.target.name) {
      newState[event.target.name] = event.target.value;
    } else if (typeof event === 'number') {
      console.log('boooooo');
    }

    console.log(event);

    setFormInput(newState);
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
              initialValue={formInput.name}
              rules={[
                {
                  required: true,
                  message: 'Please input the name of the dish name!',
                },
              ]}
            >
              <Input name="name" onChange={handleInput} />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Image"
              initialValue={formInput.image}
              rules={[
                {
                  required: true,
                  message: 'Please input the URL of the dish picture!',
                },
              ]}
            >
              <Input name="image" onChange={handleInput} />
            </Form.Item>
          </Col>
          <Col xs={12} md={6}>
            <Form.Item
              label="Calories"
              initialValue={formInput.calories}
              rules={[
                {
                  required: true,
                  message: 'Please input the calories of your dish!',
                },
              ]}
            >
              <InputNumber name="calories" onChange={handleInput} />
            </Form.Item>
          </Col>
          <Col xs={12} md={6}>
            <Form.Item
              label="Servings"
              initialValue={formInput.servings}
              rules={[
                {
                  required: true,
                  message: 'Please input 1 to 10 servings!',
                },
              ]}
            >
              <InputNumber
                min={1}
                max={10}
                name="servings"
                onChange={handleInput}
              />
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
