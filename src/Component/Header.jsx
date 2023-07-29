import React from 'react';
import './Header.css';
import logo from '../assest/logo.png';
import {Link} from "react-router-dom"
import Frame from '../assest/Frame.png';


const Header = () => {
  return (
    <header className="header">
        <div className='layout'>
        <Link to="/"> 
            <img src={logo} alt="Logo" className='folder'/>
        </Link>

        <div className='search-input'>
          <img src={Frame} alt="" />
        <input type="text" placeholder='search for result' />
        </div>
        
      </div>
    
    </header>
  );
};

export default Header;
