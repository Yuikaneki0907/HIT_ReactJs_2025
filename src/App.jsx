import React, { useState } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact";
import Product from "./pages/product";
import ProductList from "./pages/productlist";
import Header from "./components/header";
import Btvn8 from "./components/b8Home/btvn8";
import B8Login from "./components/b8Login/b8Login";
import B8Signup from "./components/b8Signup/b8Signup";

const App = () => {
  // const [disPlay, setDisPlay] = useState(false);
  // const arr = [1,2,3,4];
  // const obj = [
  //   {name: "Anh", age: 21},
  //   {name: "Nam", age: 20},
  //   {name: "Quan", age: 21},
  // ];
  // console.log(<PostItem></PostItem>)

  // const [items, setItems] = useState([]);

  // const products = [
  //   { id: 1, name: "iPhone 15", price: 25000000 },
  //   { id: 2, name: "MacBook Air M2", price: 32000000 },
  //   { id: 3, name: "iPad Pro", price: 28000000 },
  // ];

  // const handleAdd = (product) => {
  //   setItems((prev) => {
  //     const existing = prev.find((p) => p.id === product.id);
  //     if (existing) {
  //       return prev.map((p) => {
  //         if (p.id === product.id) return { ...p, quantity: p.quantity + 1 };
  //         return p;
  //       });
  //     }
  //     return [...prev, { ...product, quantity: 1 }];
  //   });
  // };

  // const handleSub = (product) => {
  //   setItems((prev) => {
  // const existing = prev.find((p) => p.id === product.id);
  // if (existing) {
  // return prev.map((p) => {
  //   if (p.id === product.id) return { ...p, quantity: p.quantity - 1 };
  //   return p;
  // }).filter((p) => p.quantity > 0);
  // }
  // return [...prev, { ...product, quantity: 1 }];
  //   });
  // };

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

  // const ele = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "productlist",
  //         element: <ProductList />,
  //       },
  //       {
  //         path: "product/:id",
  //         element: <Product />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/news",
  //     element: <News />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  // ]);
  const ele = useRoutes([
    {
      path: "/",
      element: <Btvn8 />,
    },
    {
      path: "/b8Login",
      element: <B8Login />,
    },
    {
      path: "/b8Signup",
      element: <B8Signup />,
    },
  ]);
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

      {/* <h1>Bai 1 Buoi 2</h1>
      <ListProducts
        items={items}
        products={products}
        handleAdd={handleAdd}
      ></ListProducts>
      <Card items={items} handleAdd={handleAdd} handleSub={handleSub}></Card>

        <h1>Bai 2</h1>
      <Table/>
      <h1>Bai 3</h1>
      <ButtonToggle></ButtonToggle> */}

      {/* <h1>Bai 1 Buoi 3</h1> */}
      {/* <Header3_1></Header3_1>
        <Banner3_1></Banner3_1> */}

      {/* <button onClick={() => setDisPlay(!disPlay)}>Toggle</button>
        {disPlay && <Countdown/>}
        <Counter1/>
          <Card1/> */}

      {/* <Weather></Weather> */}
      {/* <SignupForm></SignupForm> */}
      {/* <Blogs></Blogs> */}

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/productlist">Product List</Link>
        </li>
      </ul> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Header />}>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes> */}
      {ele}
      {/* <Btvn8></Btvn8> */}
    </div>
  );
};

export default App;
