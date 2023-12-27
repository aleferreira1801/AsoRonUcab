import React, { useState } from "react";
import DatePicker from "react-datepicker";

function FormCuotaAfiliacion() { 
  const [startDate, setStartDate] = useState(null);  
    return (
        <div class="container">

        <div class="text-center">
         <h1> Cuota Afiliacion </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6> Precio</h6>
      <input type="text" class="form-control" />
     
    <h6> Fecha Inicio</h6>
    <input type="date" class="form-control" value={startDate} />
  <h6> Fecha Fin</h6>
  <input type="date" class="form-control" value={startDate} />
  

  <h6> Paga</h6>
  <input type="text" class="form-control" />

  <h6> Proveedor</h6>
  <select id="inputState" class="form-control">
  <option selected></option>
  <option>Festival De Ron Caracas</option>
  <option>Curiosidades Del Ron</option>
</select>

 
  <h6> Persona Natural</h6>
  <select id="inputState" class="form-control">
  <option selected></option>
  <option>Festival De Ron Caracas</option>
  <option>Curiosidades Del Ron</option>
</select>
  </div>
  </div>
  


<div class="col-12 text-center ">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>


      </form>
      </div>


        
    );
}
export default FormCuotaAfiliacion;