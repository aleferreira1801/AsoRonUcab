
import React, { useState } from "react";
import DatePicker from "react-datepicker";


function FormBeneficio() {  
    const [startDate, setStartDate] = useState(null);
    return (
        <div class="container">

        <div class="text-center">
         <h1> Beneficio </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6> Nombre</h6>
      <input type="text" class="form-control" />
    </div>
 
  <div class="col">
  <h6> Fecha Inicio</h6>
  <input type="date" class="form-control" value={startDate} />
  </div>
  <div class="col">
  <h6> Fecha Fin</h6>
  <input type="date" class="form-control" value={startDate} />
  </div>
  
 
</div>

<div class="col">
<h6> Descripcion</h6>
<textarea class="form-control" rows="10" id="comment" ></textarea>
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
export default FormBeneficio;