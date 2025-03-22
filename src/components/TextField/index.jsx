import React, { useState } from "react";

const TextField = () => {
  const [text, setText] = useState("");

  const handleTextField = (e) => {
    setText(e.target.value);
  };

  const resetText = () => {
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={handleTextField}
      />
      <p>Noi dung o input: {text}</p>
      <button onClick={resetText}>Dat lai</button>
    </div>
  );
};

export default TextField;
