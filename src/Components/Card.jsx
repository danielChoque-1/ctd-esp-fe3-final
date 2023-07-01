import React, {useContext} from "react";
import { Link, Routes, json, useActionData } from "react-router-dom";
import { routes } from "./utils/routes";
import Detail from "../Routes/Detail";
import { useContextGlobal } from "./utils/GlobalContext";


const Card = ({ dentista }) => {

  const {state, dispatch} = useContextGlobal()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(state.destacados.includes(dentista)){
      dispatch({type:'SET_SACARDESTACADOS', payload: dentista})
    } else{
      dispatch({type: 'SET_DESTACADOS', payload: dentista})
    }
    
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="card-doctor" src="/images/doctor.jpg" alt="card-doctor" />
        <h2>{dentista.name}</h2>
        <p>{dentista.username}</p>

        <Link to ={'detalle/' + dentista.id}><h4>Ver detalle</h4></Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="button-home">Add fav</button>
    </div>
  );
};

export default Card;
