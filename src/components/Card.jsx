import React from "react";
import {useDispatch} from "react-redux"
import { addFavorites } from "../redux/actions";

export default function Card({  Nombre, Estreno, episodes}) {

const dispatch = useDispatch()
const handleClick = (event) => {
  const favorite = {
    ...episodes,
    completed: false,
    rating:3
  }
  dispatch(addFavorites(favorite)) //
}

  return (
    <div>
      <h2>Nombre: {Nombre}</h2>
      <h2>Estreno: {Estreno}</h2>

      <button onClick={handleClick}>Favorito</button>
      <hr />
    </div>
  );
}
