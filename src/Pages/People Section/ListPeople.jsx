import React, { useState} from 'react';
import menu from '../../assest/Menu Button.png'


import download from '../../assest/Dropdown/download.png';
import rename from '../../assest/Dropdown/rename.png';
import share from '../../assest/Dropdown/share.png';
import folder from '../../assest/Dropdown/folder.png';
import mark from '../../assest/Dropdown/lock.png';
import mark1 from '../../assest/Dropdown/delete.png';
import view from '../../assest/Dropdown/view.png';

const ListPeople = ({people}) => {
    const [modal, setModal] = useState(false);
    
  return (
    <div>
      { 
        <table className='table-container'>
        <thead>
          <tr className='table-list'>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Species</th>
          </tr>
        </thead>
        {
          people.map((person) => (
            <>
                <tbody>
                  <tr className='tr-table'>
                  
                    <td>{person.name}</td>
                    <td>{person.birth_year}</td>
                    <td>{person.species.length > 0 ? person.species[0] : 'Unknown'}</td>
                    <img src={menu} alt="" onClick={() => { setModal(!modal) }}/>
                
                  </tr>
                </tbody>
             
            </>
          )) 
        }

      </table>
      }
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
  

export default ListPeople