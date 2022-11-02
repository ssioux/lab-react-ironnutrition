import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

    const [searchFood, setSearchFood] = useState("")

    const handleChangeSearch = (event) => {

        setSearchFood(event.target.value)
        
        props.setFoodListShown(() => {

          const filteredFoodArr = props.foodList.filter((eachFood)=> {
            return eachFood.name.toLowerCase().includes(event.target.value.toLowerCase())
          })
            return filteredFoodArr
    })
        
    }
  
    return (
    <>
      <Divider>Search</Divider>

      <label >Search Dish</label>
    
      <Input value={searchFood} type="text" onChange={handleChangeSearch} />
      
    </>
  );
}

export default Search;
