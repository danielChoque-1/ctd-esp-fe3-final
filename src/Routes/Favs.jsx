import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const destacados = JSON.parse(localStorage.getItem('destacados')) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {destacados.map((destacados, index) => (
          <Card key = {index} dentista = {destacados} />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
