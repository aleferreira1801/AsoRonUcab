import React from "react";

import "../Styles/Home.css";
import NavbarRegistros from '../Components/NavbarRegistro'
import Footer from '../Components/Footer'
import Carouselcomponet from '../Components/Carousel'
import Encabezado from "../Components/EncabezadoHome";
function HomeRegistro() {
  return (
    <div>
    <Carouselcomponet/>
    <Encabezado/>
    <NavbarRegistros></NavbarRegistros>
    <Footer></Footer>

  
    </div>
    
     
  );
}

export default HomeRegistro;