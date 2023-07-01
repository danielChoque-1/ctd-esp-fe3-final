
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import {routes} from './Components/utils/routes'
import './App.css'
import { useContextGlobal } from "./Components/utils/GlobalContext";


function App() {
  const {state} = useContextGlobal()
  return (
      <div className= {`App ${state.tema}`}>
          <Navbar/>
            <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favourite} element={<Favs/>}/>
            <Route path={routes.detailDentist} element={<Detail/>}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
