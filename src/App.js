import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

// return string[0].toUpperCase() + string.slice(1).toLowerCase();

function App() {
  const foodsArr = foods;
  const [foodList, setFoodList] = useState(foodsArr);
  const [foodListShown, setFoodListShown] = useState(foodsArr);

  

  const [formShow, setFormShow] = useState(false);

  const toggleForm = () => {
    setFormShow(!formShow);
  };

  return (
    <div className="App">
      <div>
        <Col>
          <Card>
            <Button onClick={toggleForm}>Create New Dish</Button>

            {formShow === true && <AddFoodForm setFoodList={setFoodList} setFoodListShown={setFoodListShown} />}
          </Card>
        </Col>

        <Col>
          <Search setFoodListShown={setFoodListShown} foodList={foodList}/>
        </Col>
      </div>
      <div>
        <Row>
          {foodListShown.map((eachFood, index) => {
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
