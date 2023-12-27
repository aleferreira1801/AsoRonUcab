import React, { useState}from 'react'
import logo from '../assets/logoronpagina.png';
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";

function NavbarRegistro() {
  
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/">
        <img src={logo}  alt="..."/>
        </Link>

        <div className="hiddenLinks">
          <Link to="/Tienda"> Catalogo </Link>
         
          <Link to="/Compra"> compra </Link>
          <Link to="/Evento"> Eventos </Link>
          <Link to="/Contacto"> Contacto </Link>
          
        
        </div>
      </div>
      <div className="rightSide">
        <Link to="/Evento"> Eventos </Link>
        <Link to="/Contacto"> Contacto </Link>
        <Link to="/Tienda"> Catalogo </Link>
        
        
       

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default NavbarRegistro;