import React, { useMemo, useRef, useState } from "react";

const Card1 = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  // const [total, setTotal] = useState(0);
  const handleCard1 = () => {
    setProduct([...product, { name, price: parseInt(price) }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const nameRef = useRef();
  //   const total = useMemo(() => {
  //     const result = product.reduce((result, prod) => result + prod.price, 0);
  //     return result;
  //   }, [product]);
  // const total = () => {
  const result = product.reduce((result, prod) => result + prod.price, 0);

  return (
    <div>
      <input
        type="text"
        className="name"
        placeholder="Ten san pham"
        value={name}
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="money"
        placeholder="Gia san pham"
        value={price}
        ref={nameRef}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleCard1}>Add</button>
      <h3>Total: {result}</h3>
      <ul>
        {product.map((item, key) => (
          <li key={key}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card1;
