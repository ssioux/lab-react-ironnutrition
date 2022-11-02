import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import {useState} from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const foodsArr = foods;
  const [foodList, setFoodList] = useState(foodsArr);
  
  
  const addDish = () => {

  }
  
  return (
    <div className="App">
        <div>

      <Row>
        {/* <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col> */}
        <AddFoodForm />

        {foodList.map((eachFood, index) => {
          return (
            <div key={eachFood.name + index}>
              <FoodBox eachDish={eachFood} />
            </div>
          )
        })}

        {/* <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col> */}
      </Row>
      </div>
    </div>
  );
}

export default App;
