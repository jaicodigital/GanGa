import React, { useState } from "react";
import { filterPriceByRange } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import "./filterPrice.css";

export default function FilterPrice() {
  const dispatch = useDispatch();
  const [, setCurrentPage] = useState(1);
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");

  function handleInput1(e) {
    e.preventDefault();
    setPrice1(e.target.value);
  }
  function handleInput2(e) {
    e.preventDefault();
    setPrice2(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterPriceByRange(price1, price2));
    setPrice1(" ");
    setPrice2(" ");
    setCurrentPage(1);
  }
  return (
    <div className="inputContainer">
      <div className="conPriceMin">
        <input
          className="inputPrice"
          type="text"
          placeholder="precio mínimo de..."
          onChange={handleInput1}
        />
      </div>
      <h3 className="has">hasta</h3>
      <div className="conPriceMax">
        <input
          className="inputPrice"
          type="text"
          placeholder="precio máximo de..."
          onChange={handleInput2}
        />
      </div>
      <div className="conFil">
        <button className="fil" type="submit" onClick={handleSubmit}>
          Filtra ahora
        </button>
      </div>
    </div>
  );
}
