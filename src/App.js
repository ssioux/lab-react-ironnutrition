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

  const [formShow, setFormShow] = useState(false)
  
  
  const toggleForm = () => {

    setFormShow(!formShow)

  }
  
  return (
    <div className="App">
        <div>
          
        <Col>
          <Card>
       
            <Button onClick={toggleForm}>Create New Dish</Button>
            
            {formShow === true && <AddFoodForm setFoodList={setFoodList}/>}
          
          </Card>
        </Col>

        <Col>
          <Divider>Search Dish</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>
    </div>
    <div>
      <Row> 

     

    

     
        
     
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
