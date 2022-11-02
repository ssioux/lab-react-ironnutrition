import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    console.log(props)
  // * States

  const [dishInput, setDishInput] = useState('');
  const [imgInput, setImgInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  // * Create New Dish

  const addDish = (event) => {
    event.preventDefault();
    console.log("intentando añadir producto")
    
    const newDish = {
        name: dishInput,
        image: imgInput,
        calories: caloriesInput,
        servings: servingsInput
    }

    props.setFoodList((currentState) => {
        const copy = [...currentState]
        copy.push(newDish)
        return copy
    })

  };

  // * handle

  const handlechangeName = (event) => {
    setDishInput(event.target.value);
  };

  const handlechangeImg = (event) => {
    setImgInput(event.target.value);
  };

  const handlechangeCalories = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handlechangeServings = (event) => {
    setServingsInput(event.target.value);
  };

  // * Form

  return (
    <form onSubmit={addDish}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={dishInput} type="text" name="name"onChange={handlechangeName} />

      <label htmlFor="image">Image</label>
      <Input
        value={imgInput}
        type="text"
        name="image"
        onChange={handlechangeImg}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        value={caloriesInput}
        type="number"
        name="calories"
        onChange={handlechangeCalories}
      />

      <label>Servings</label>
      <Input
        value={servingsInput}
        type="number"
        name="servings"
        onChange={handlechangeServings}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
