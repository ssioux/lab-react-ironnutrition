
import { Divider, Input } from 'antd';
import {useState} from "react"


// Iteration 4
function AddFoodForm(props) {

    const [dishInput, setDishInput] = useState("")
    const [imgInput, setImgInput] = useState("")
    const [caloriesInput, setSaloriesInput] = useState(0)
    const [servingsInput, setServingsInput] = useState(0)

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={undefined} type="text" />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number"/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
