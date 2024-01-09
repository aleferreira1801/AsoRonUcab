import React from "react";

import "../Styles/Home.css";

import Carouselcomponet from '../Components/Carousel'
import Encabezado from "../Components/EncabezadoHome";

function Home() {
  return (
    <div>
    <Carouselcomponet/>
    <Encabezado/>
    </div>
    
     
  );
}

export default Home;