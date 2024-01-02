import React from "react";

import "../Styles/login.css";

import {Link} from 'react-router-dom'



function login() {
  return (

    <section class=" text-center text-lg-start"  >

    
    <div class="card mb-3"  >
    
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img src="https://lirp.cdn-website.com/23be95e4/dms3rep/multi/opt/ron-y-barrica-640w.jpg" alt="Trendy Pants and Shoes"
          class="rounded"   />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">
          <div class="text-center">
          <h1> Inicio De Sesion </h1>
          </div>
            <form>
          
              <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1" ><span class="fs-4">Email address</span></label>
                <input type="email" id="form2Example1" class="form-control" />
              </div>
  
          
              <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2"><span class="fs-4">password</span></label>
                <input type="password" id="form2Example2" class="form-control" />
              </div>
  
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
               
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>
  
                <div class="col">
                 
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
  
             <div class="text-center   d-grid gap-2 d-md-block " >
             <Link to="/Compra"> 
              <button type="button"  class="btn btn-dark text rounded-pill" >Continuar</button>
              </Link>
              <Link to="/Usuario"> 
              <button type="button"  class="btn btn-dark rounded-pill  " >Crear Cuenta </button>
              </Link> 
              </div>
              
  
            </form>
  
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
  );
}

export default login;
