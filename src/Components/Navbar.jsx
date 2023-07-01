import React, { useContext, useState } from 'react'
import {Link, Routes, Route } from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/GlobalContext'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const toggleTema = () => {
    dispatch({type:'SET_TEMA', payload: state.tema === 'light' ? 'dark' : 'light'})
  }
  return (
    <nav className= 'navbar' >
      <div className='odonto'>
      <img src="/DH.ico" alt="" />
        <h3>ODONTO</h3>
      </div>
      <div className='links'>
      <Link to ={routes.home} ><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favourite}><h4>Favs</h4></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='button-home' onClick={toggleTema}>Tema</button>
      </div>
      
    </nav>
    
  )
}

export default Navbar
