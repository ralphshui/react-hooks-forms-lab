import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, onItemFormSubmit }) {
  const [itemName,  setItemName] = useState("");
  const [itemCategory,  setItemCategory] = useState("Produce");

  // const onItemFormSubmit = (e) => {
   
  //   setItems([...items, newItem]);
  //   
    
  //   } else (alert("Please fill in Item Name"))}

  function handleSubmit(e) {
    e.preventDefault();
    if (itemName !== "") {
      const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
    setItemName('');
  }
}
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} 
        onChange={(e)=>setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
