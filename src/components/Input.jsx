// import { useState } from "react";
import { useContext } from "react";
import Context from "../context/Context";

import "./word.css";

function Input() {
  const { inputValue, setInputValue, setStartCount, timer } =
    useContext(Context);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      setStartCount(true);
    }
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          className="input-field"
          autoFocus
          disabled={timer === 0 ? true : false}
        />
      </div>
    </>
  );
}

export default Input;
