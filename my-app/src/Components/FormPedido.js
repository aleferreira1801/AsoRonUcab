
import React, { useState } from "react";
import DatePicker from "react-datepicker";


function FormPedido() {   
  const [startDate, setStartDate] = useState(null);
    return (
        <div class="container">

        <div class="text-center">
         <h1> Pedido</h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
    <h6> Numero</h6>
    <select id="inputState" class="form-control">
    <option selected></option>
    <option> Fecha Inicio </option>
    <option> Fecha Fin </option>
  </select>
    </div>
    
    <div class="col">
    <h6> Tienda Online</h6>
    <select id="inputState" class="form-control">
    <option selected></option>
    <option> Fecha Inicio </option>
    <option> Fecha Fin </option>
  </select>
    </div>
  <div class="col">
  <h6> Fecha Realizada </h6>
  <input type="date" class="form-control" value={startDate} />
  </div>
  <div class="col">
  <h6> Fecha Realizada</h6>
  <input type="date" class="form-control" value={startDate} />
</div>

<div class="col">
    <h6> Punto De Venta Online</h6>
    <select id="inputState" class="form-control">
    <option selected></option>
    <option> Fecha Inicio </option>
    <option> Fecha Fin </option>
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
export default FormPedido;