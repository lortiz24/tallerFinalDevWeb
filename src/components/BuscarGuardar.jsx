import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";

const BuscarGuardar = ({ valorBusqueda, arrayData, setControllerGetDB }) => {
  const { animes } = UseGetAnimes(valorBusqueda, arrayData,setControllerGetDB);
 
  return (
    <></>
  )
};

export default BuscarGuardar;
