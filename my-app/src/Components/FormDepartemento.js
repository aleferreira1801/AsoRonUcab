import React from 'react'

function FormDepartamento() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Departamento</h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6> Numero</h6>
      <input type="text" class="form-control"/>
    </div>
    <div class="col">
      <h6>Nombre</h6>
      <input type="text" class="form-control" />
    </div>
     
  </div>
  <div class="col">
     <h6>Descripcion</h6>
  <textarea class="form-control" rows="5" id="comment"></textarea>
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
export default FormDepartamento;