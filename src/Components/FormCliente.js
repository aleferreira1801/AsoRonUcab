import React, { useState } from "react";
import DatePicker from "react-datepicker";




function FormCliente() { 
  const [startDate, setStartDate] = useState(null);  
    return (
        <div class="container">

        <div class="text-center">
         <h1> Cliente</h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6> usuario </h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6> Contraseña </h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6> Fecha </h6>
    <input type="date" class="form-control" value={startDate} />
  </div>
  </div>
</form>
<form>
<div class="row">
  <div class="col">
  <h6> Numero </h6>
    <input type="text" class="form-control"/>
  </div>
  <div class="col">
  <h6> Persona Natural</h6>
  <select id="inputState" class="form-control">
  <option selected></option>
  <option>Festival De Ron Caracas</option>
  <option>Curiosidades Del Ron</option>
</select>
  </div>
  
</div>
</form>
<form>
<div class="row">
<div class="col">
<h6> Pedido</h6>
<select id="inputState" class="form-control">
<option selected></option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div>
  <div class="col">
  <h6> Empleado</h6>
  <select id="inputState" class="form-control">
  <option selected></option>
  <option>Festival De Ron Caracas</option>
  <option>Curiosidades Del Ron</option>
</select>
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