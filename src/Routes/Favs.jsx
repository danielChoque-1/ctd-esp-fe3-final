import React from "react";
import Card from "../Components/Card";

const Favs = () => {


  const destacados = JSON.parse(localStorage.getItem('destacados')) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {destacados.map((destacados, index) => (
          <Card key = {index} dentista = {destacados} />
        ))}
      </div>
    </>
  );
};

export default Favs;
