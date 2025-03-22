import React, { useState } from "react";
import "./style.css";

const ListProducts = ({ products, handleAdd, items }) => {
  const tong = (items) => {
    let sum = 0;
    for (let i of items){
      sum = sum + i.quantity;
    }
    return sum; 
  }
  return (
    <div>
      <h1>Gio hang (<samp>{tong(items)} </samp>san pham)</h1>
      <div>
        <h3>Danh sach san pham</h3>
        {products.map((item, key) => (
          <div key={item.id}>
            <p>
              {item.name} - {item.price} VND
            </p>
            <button onClick={() => handleAdd(item)}>Them vao gio</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
// props
