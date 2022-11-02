import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import {useState} from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

// return string[0].toUpperCase() + string.slice(1).toLowerCase();

function App() {
  const foodsArr = foods;
  const [foodList, setFoodList] = useState(foodsArr);
  
  
  // const addDish = (dish) => {
    
  //   const copyFoodsArr = [...foodList]


  // }
  
  return (
    <div className="App">
        <div>

      <Row> 
               <Col>
          <Card title={'Fancy Card'}>
       
            <Button onClick={() => {}}>Fancy Button</Button>
            
            <AddFoodForm setFoodList={setFoodList}/>
          
          </Card>
        </Col>

        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>
        

        {foodList.map((eachFood, index) => {
          return (
            <div key={eachFood.name + index}>
              <FoodBox eachDish={eachFood} />
            </div>
          )
        })}

 
      </Row>
      </div>
    </div>
  );
}

export default App;
