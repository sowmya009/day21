import React from "react";
import ItemCard from "./Itemcard";

function ItemList({ products }) {
  return (
    <div className="ItemList">
      {products.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;