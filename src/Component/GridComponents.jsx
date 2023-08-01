import React, { useState} from 'react';
import menu from '../assest/Menu Button.png';
import Film from '../assest/FilmReel.jpg';
import view from '../assest/Dropdown/view.png';

import download from '../assest/Dropdown/download.png';
import rename from '../assest/Dropdown/rename.png';
import share from '../assest/Dropdown/share.png';
import folder from '../assest/Dropdown/folder.png';
import mark from '../assest/Dropdown/lock.png';
import mark1 from '../assest/Dropdown/delete.png';

import './gridComponent.css';


function GridComponents({ film }) {
  const [modal, setModal] = useState(false)
  return (
    < >
      <div className='film-section'>
        <li key={film.episode_id}>
          <img src={`https://picsum.photos/200?random=${film.episode_id}`} alt={film.title} className='film-img' />

          <div className='film-reel'>
            <img src={Film} alt="" />
            <p>{film.title}</p>
            <img className='menu' src={menu} alt="" onClick={() => { setModal(!modal) }} />

          </div>
        </li>
        {modal && <div className="dropdown-menu  new-model">
          <ul className='new-list'>
            <DropdownItem img={view} text={"View"} />
            <DropdownItem img={download} text={"Download"} />
            <DropdownItem img={rename} text={"Rename"} />
            <DropdownItem img={share} text={"Share Link"} />
            <DropdownItem img={folder} text={"Move"} />
            <DropdownItem img={mark} text={"Mark Private"} />
            <DropdownItem img={mark1} text={"Delete"} />
          </ul>
        </div>}
      </div>
    </>



  )
}
function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default GridComponents
