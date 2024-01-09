import React, { useState } from "react";
import DatePicker from "react-datepicker";

function FormPagoEntrada() { 
  const [startDate, setStartDate] = useState(null);  
    return (
      <div class="container">

      <div class="text-center">
       <h1>Pago Entrada</h1>
       </div>
      <form>
<div class="row">
  <div class="col">
  <h6>Fecha</h6>
  <input type="date" class="form-control" value={startDate} />
  </div>
  <div class="col">
  <h6>Cantidad</h6>
  <input type="text" class="form-control" />
</div>
    <div class="col">
    <h6>Entrada</h6>
    <select id="inputState" class="form-control">
    <option selected></option>
    <option>Festival De Ron Caracas</option>
    <option>Curiosidades Del Ron</option>
  </select>
    </div>
    <div class="col">
    <h6>Total</h6>
  <input type="text" class="form-control" />
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
export default FormPagoEntrada;