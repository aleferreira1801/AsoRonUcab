import React from 'react'

function FormProveedor() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Proveedor </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6>Nombre</h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6>Denominacion  Comercial </h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6>Afiliacion Proveedor</h6>
    <input type="text" class="form-control" />
  </div>
<div class="col">
<h6> Persona Juridica</h6>
<select id="inputState" class="form-control">
<option selected></option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div>
</div>
  






<div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>
      
      </form>
      </div>
);

}
export default FormProveedor;