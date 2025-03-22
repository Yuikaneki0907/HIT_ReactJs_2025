import React, { useState } from "react";

const Card = ({ items, handleAdd, handleSub }) => {
  return (
    <>
      <div>
        <h3>Gio hang cua ban</h3>
        <p>{items.length ? "" : "Gio hang trong"}</p>
        {items.map((item, index) => (
          <div key={index}>
            {item.name} - {item.quantity} sản phẩm
            <button onClick={() => handleAdd(item)}>+</button>
            <button onClick={() => handleSub(item)}>-</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
