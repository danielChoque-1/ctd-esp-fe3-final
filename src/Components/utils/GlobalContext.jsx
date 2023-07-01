import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import axios from 'axios'

const ContextGlobal = createContext();

const initialState = {destacados: JSON.parse(localStorage.getItem('destacados')) || [],
  data: [], dentista: {}, tema:'light' };


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_DENTISTA":
      return { ...state, dentista: action.payload };
    case 'SET_DESTACADOS':
      return {...state, destacados: [...state.destacados, action.payload]}
    case 'SET_SACARDESTACADOS':
      return {...state, destacados: state.destacados.filter(destacados => (destacados.id !== action.payload.id))}
    case 'SET_TEMA':
      return {...state, tema: action.payload}
    default:
      throw new Error();
  }
};


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users'


  useEffect (() => {
    axios(url)
    .then(res => dispatch({type: 'SET_DATA', payload: res.data}))
  }, [])

  useEffect (() => {
    localStorage.setItem('destacados', JSON.stringify(state.destacados))
  }, [state.destacados])

  return (
    <ContextGlobal.Provider value={{
      state, dispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () =>  useContext(ContextGlobal)
