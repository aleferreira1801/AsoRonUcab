
import React, { useState } from "react";
import DatePicker from "react-datepicker";

function FormPremio() {   
  const [startDate, setStartDate] = useState(null);
    return (
      <div class="container">

      <div class="text-center">
       <h1>Premio</h1>
       </div>
      <form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Nombre"/>
  </div>
  <div class="col">
  <input type="date" class="form-control" value={startDate} />
</div>
    <div class="col">
    <select id="inputState" class="form-control">
    <option selected>Evento</option>
    <option>Festival De Ron Caracas</option>
    <option>Curiosidades Del Ron</option>
  </select>
    </div>
</div>
<div class="col">
<textarea class="form-control" rows="5" id="comment" placeholder="Descripcion"></textarea>
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
export default FormPremio;