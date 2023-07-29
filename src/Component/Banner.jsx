import React from 'react';

import './banner.css';
import {Link} from "react-router-dom"
import Folder from '../assest/FolderSimple.png';
import right  from '../assest/CaretRight.png';

const Banner = () => {
  return (
    <div className='layout'>
        
        <nav className="navigation">
        <ul className='nav-header'>
          <li>
            <img src={Folder} alt="" />
          <Link  to="/film">Films </Link>
            <img src={right} alt="" className='right' />
          </li>
          <li >
          <img src={Folder} alt="" />
          <Link to="/people">People</Link>
          <img src={right} alt="" className='right' />
          </li>
          <li>
            <img src={Folder} alt="" />
          <Link to="/planet">Planets</Link>
          <img src={right} alt="" className='right' />
          </li>
          <li>
           <img src={Folder} alt="" />
          <Link to="/species">Species</Link>
          <img src={right} alt="" className='right' />
          </li>
          <li>
          <img src={Folder} alt="" />
            <Link to="/starships">Starships</Link>
            <img src={right} alt="" className='right' />
          </li>
          <li>
          <img src={Folder} alt="" />
            <Link to="/vehicles">Vehicles</Link>
            <img src={right} alt="" className='right' />
          </li>
        
        </ul>
       
      </nav>
      
    </div>
  )
}

export default Banner