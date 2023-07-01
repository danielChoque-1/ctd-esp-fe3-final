import React from 'react'
import {Link} from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/GlobalContext'


const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const toggleTema = () => {
    dispatch({type:'SET_TEMA', payload: state.tema === 'light' ? 'dark' : 'light'})
  }
  return (
    <nav className= 'navbar' >
      <div className='odonto'>
      <img src="/DH.ico" alt="DHico" />
        <h3>Odonto</h3>
      </div>
      <div className='links'>
      <Link to ={routes.home} ><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favourite}><h4>Favs</h4></Link>
      <button className='button-home' onClick={toggleTema}>Tema</button>
      </div>
      
    </nav>
    
  )
}

export default Navbar
