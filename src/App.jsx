import React, { useState } from "react";
import Counter from "./components/Counter";
import TextField from "./components/TextField";
import PostItem from "./components/PostItem";
import Svg from "./assets/react.svg";
import ButtonToggle from "./components/ButtonToggle";
import ListProducts from "./components/ListProducts";
import Card from "./components/card";
import Table from "./components/Table";

const App = () => {
  // const arr = [1,2,3,4];
  // const obj = [
  //   {name: "Anh", age: 21},
  //   {name: "Nam", age: 20},
  //   {name: "Quan", age: 21},
  // ];
  // console.log(<PostItem></PostItem>)

  const [items, setItems] = useState([]);

  const products = [
    { id: 1, name: "iPhone 15", price: 25000000 },
    { id: 2, name: "MacBook Air M2", price: 32000000 },
    { id: 3, name: "iPad Pro", price: 28000000 },
  ];

  const handleAdd = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => {
          if (p.id === product.id) return { ...p, quantity: p.quantity + 1 };
          return p;
        });
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleSub = (product) => {
    setItems((prev) => {
      // const existing = prev.find((p) => p.id === product.id);
      // if (existing) {
        return prev.map((p) => {
          if (p.id === product.id) return { ...p, quantity: p.quantity - 1 };
          return p;
        }).filter((p) => p.quantity > 0);
      // }
      // return [...prev, { ...product, quantity: 1 }];
    });
  };

  // const handleSub = (product) => {
  //   setItems((prev) => {
  //     for(p of prev){
  //       if(p.id === product.id){
  //         p.quantity --;
  //       }
  //     }
  //     return prev 
  //   });
  // };

  return (
    <div>
      {/* <PostItem p = "Hello world" img = {Svg} object = {obj}></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem> */}
      {/* <Counter></Counter> */}
      {/* <TextField></TextField> */}
      {/* {arr.map((item, key) =>(
        <h1 key = {key}>{item}</h1>
      ))}
      {obj.map((item, key) => (
        <h1 key = {key}>
          {item.name} - {item.age}
        </h1>
      ))} */}
      {/* <ListProducts sp={products}></ListProducts>
      <ButtonToggle></ButtonToggle> */}

      <h1>Bai 1</h1>
      <ListProducts
        items={items}
        products={products}
        handleAdd={handleAdd}
      ></ListProducts>
      <Card items={items} handleAdd={handleAdd} handleSub={handleSub}></Card>

        <h1>Bai 2</h1>
      <Table/>
      <h1>Bai 3</h1>
      <ButtonToggle></ButtonToggle>
    </div>
  );
};

export default App;
