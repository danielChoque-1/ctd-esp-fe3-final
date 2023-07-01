import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContext from './Components/utils/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <GlobalContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContext>


)
