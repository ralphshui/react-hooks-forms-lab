import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const categorizedItems = items.filter((item) => {
    if(selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const [search, setSearch] = useState("");
  
  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  const searchResults = categorizedItems.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div className="ShoppingList">
      <ItemForm items={items} onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={searchChange} onCategoryChange={handleCategoryChange}/>
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul> 
    </div>
  );
}

export default ShoppingList;
