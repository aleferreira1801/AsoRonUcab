import React from 'react'
import {Link} from 'react-router-dom'

function FormEntrada() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Entrada </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Precio"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Codigo"/>
  </div>
  <div class="col">
    <select id="inputState" class="form-control">
    <option selected>Evento</option>
    <option>Festival De Ron Caracas</option>
    <option>Curiosidades Del Ron</option>
  </select>
    </div>
  </div>
  <div class="col">
  <textarea class="form-control" rows="5" id="comment" placeholder="Descripcion"></textarea>
  </div>
  


<div class="col-12 text-center ">
<Link to="/PagoEntrada">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
        </Link >
      </div>


      </form>
      </div>
        
    );
}
export default FormEntrada;