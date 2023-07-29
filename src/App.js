import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from '../src/Component/Header'
import Film from '../src/Pages/Film Section/Film'
import People from './Pages/People Section/People';
import Planets from './Pages/Planet Section/Planets';
import Banner from './Component/Banner';
import Species from './Pages/Specie Section/Species';
import Starships from './Pages/StarShip Section/Starships';
import Vehicles from './Pages/Vehicles Section/Vehicles';
import Home from './Component/Home';
import './App.css'
const App = () => {


  return (
    <div  classname="conatiner">
      <Header />
      <div style={{
        display:"flex",
        alignItems:"center"

      }}>
<Banner />
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/film' element={<Film />}>
        </Route>
        <Route path='/people' element={<People />}>
        </Route>
        <Route path='/planet' element={<Planets />}>
        </Route>
        <Route path='/species' element={<Species />}>
        </Route>
        <Route path='/starships' element={<Starships />}>
        </Route>
        <Route path='/vehicles' element={<Vehicles />}>
        </Route>
      </Routes>
      </div>
      

    </div>
  )
}

export default App