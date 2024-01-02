import React, { useState } from "react";
import "../Styles/login.css";

import {Link} from 'react-router-dom'


function Registrar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  
  return (
     
    <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://www.roncarupano.com/wp-content/uploads/2020/06/RON-CARUPANO-12-1.jpg" alt=""
        class="rounded float-start" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">
         <div class="text-center">
         <h1> Crear Cuenta </h1>
         </div>
  
        <form class="row g-3">
        <div class="col-4">
          <label style={{ fontWeight: "bold" }}>Nombre Usuario</label>
          <input type="text" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-4">
          <label style={{ fontWeight: "bold" }}>Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-4">
          <label  style={{ fontWeight: "bold" }}>Fecha</label>
          <input type="date" class="form-control" id="inputAddress" />
        </div>
        <div class="col-4">
          
          <input type="file" name="image" onChange={handleImageChange} />
          <img  style={{ backgroundColor: "white", color: "black" }}src={image} />
        </div>
        <div class="col-4">
        <label style={{ fontWeight: "bold" }} >Numero</label>
        <input type="integer" class="form-control" id="inputAddress2" />
      </div>
       
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Pedido</label>
          <select id="inputState" class="form-select">
            <option selected>Seleccione un Pedido</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Persona Natural</label>
          <select id="inputState" class="form-select">
            <option selected>Seleccione una Persona Natural</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Empleado</label>
          <select id="inputState" class="form-select">
            <option selected>Seleccione un Empleado</option>
            <option>...</option>
          </select>
        </div>
       
        <div class="col-12">
             <Link to='/HomeRegistro'>
              <button type="button"  class="btn btn-dark rounded-pill  " >Aceptar</button>
              </Link>
             
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>

  );
}
export default Registrar;
