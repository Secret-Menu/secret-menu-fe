import React, { useState } from 'react';

export default function AddOffering() {

  const [dishName, setDishName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [numRemaining, setNumRemaining] = useState(0);
  const [servingSize, setServingSize] = useState(0);
  const [dietaryRestriction, setDietaryRestriction] = useState([]);
  
  //handleChange
  //handleSubmit

  return (
    <div>
      <form onSubmit={handleAddOffering}>
        <input type="text" value={dishName} name="dishName" onChange={handleChange} placeholder="Dish Name" />
        <input type="text" value={imageUrl} name="imageUrl" onChange={handleChange} placeholder="Image url" />
        <input type="text" value={description} name="description" onChange={handleChange} placeholder="Description" />
        <input type="number" value={numRemaining} name="numRemaining" onChange={handleChange} placeholder="Number of dishes" />
        <input type="text" value={servingSize} name="servingSize" onChange={handleChange} placeholder="Serving Size" />
        <input type="datetime-local" value={pickUpDate} name="pickUpDate" onChange={handleChange} placeholder="Pick Up Date" />
        <label>Dietary Restrictions</label>
        <select value={dietaryRestriction} name="dietaryRestriction" onChange={({ target }) => setDietaryRestriction(target.value)}>
          <option value = "None" selected>None</option>
          <option value = "Vegetarian">Vegetarian</option>
          <option value = "Vegan">Vegan</option>
          <option value = "Gluten Free">Gluten Free</option>
          <option value = "Dairy Free">Dairy Free</option>
      </select>
        <button>Add</button>
      </form>
    </div>
  );
}
