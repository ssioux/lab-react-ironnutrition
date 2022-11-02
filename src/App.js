import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
// import {useState} from "react"
import FoodBox from './components/FoodBox';

function App() {
  const foodsArr = foods;
  // const [foodList, setFoodList] = useState(foodsArr);
  return (
    <div className="App">
        <div>
      {/* {foodsArr.map((eachFood, index) => {
       return ( 
       <div key={eachFood.name + index}>
          <p>{eachFood.name}</p>
          <img src={eachFood.image} width={150} alt="foodImg" />
        </div>
       )
      })} */}

      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        {foodsArr.map((eachFood, index) => {
          return (
            <div key={eachFood.name + index}>
              <FoodBox eachDish={eachFood} />
            </div>
          );
        })}

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
