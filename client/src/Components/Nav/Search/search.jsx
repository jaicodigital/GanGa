import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { getProductByName } from '../../Redux/Actions/actions'

export default function BuscarProducto() {
  const dispatch = useDispatch()
  const [name, setName] = useState(" ")


  function handleSumit(e) {
    dispatch(getProductByName(name))
    setName("")
  }

  function handleInput(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del producto"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSumit}>
        <ImSearch />
      </button>
    </div>
  );
}