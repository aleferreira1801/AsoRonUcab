import React from 'react'

function FormCliente() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Cliente </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Usuario"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Contraseña"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Fecha"/>
  </div>
  </div>
</form>
<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Numero"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Punto Cliente"/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Nombre Red Social"/>
</div>
</div>
</form>
<form>
<div class="row">
<div class="col">
  <input type="text" class="form-control" placeholder="Usuario Red Social"/>
</div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Punto Acumulado"/>
</div>
<div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>


</div>
</form>




      </div>
        
    );
}
export default FormCliente;