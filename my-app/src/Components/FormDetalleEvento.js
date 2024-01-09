import React from 'react'

function FormDetalleEvento() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Detalle Evento </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre "/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Numero Edicion"/>
  </div>
  </div>
  <div class="col">
    <textarea class="form-control" rows="5" id="comment" placeholder="Descripcion"></textarea>
    </div>
</form>
<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Fecha Inicio"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Fecha Fin"/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Localizacion"/>
</div>
</div>
</form>
<form>
<div class="row">
<div class="col">
  <input type="text" class="form-control" placeholder="Limite Ocupacion"/>
</div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Hora Inicio"/>
</div>
<div class="col">
  <input type="text" class="form-control" placeholder="Hora Fin"/>
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
export default FormDetalleEvento;