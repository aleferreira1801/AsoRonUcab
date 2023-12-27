import React from "react";
import "../Styles/login.css";

import {Link} from 'react-router-dom'

function Registrar() {
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
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Nombre Usuario</label>
          <input type="text" class="form-control" id="inputAddress" placeholder=""/>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
       
        <div class="col-md-4">
          <label for="inputState" class="form-label">Estado</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
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
