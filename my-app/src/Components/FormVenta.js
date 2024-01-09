
import React, { useState } from "react";
import DatePicker from "react-datepicker";

function FormVenta() { 
  const [startDate, setStartDate] = useState(null);  
    return (
        <div class="container">

        <div class="text-center">
         <h1> Venta </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Numero Factura "/>
    </div>
    <div class="col">
    <select id="inputState" class="form-control">
    <option selected>Tienda Online</option>
    <option> </option>
  </select>
    </div>
    <div class="col">
    <select id="inputState" class="form-control">
    <option selected>Tienda Fisica</option>
    <option> Online</option>
  </select>
    </div>
  <div class="col">
  <input type="date" class="form-control" value={startDate} />
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder=" Total"/>
</div>
<div class="col">
<input type="text" class="form-control" placeholder=" Punto Ganado"/>
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
export default FormVenta;