import React from 'react'
import hero from '../assest/hero.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home-section'>
    <div className="home-content">
    <div className="home-img">
        <img src={hero} alt="" className='img-section' />
    </div>
    <h2 className="home-title">Welcome To Star Wars Dashboard</h2>
    <p className='home-subtitle'>Star Wars is an American epic space opera multimedia franchise created 
       by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>


</div>
</div>
  )
}

export default Home