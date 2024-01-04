import React from "react";

function FormPunto() {
  return (
    <div class="container p-4">
    <div class="text-center">
      <h1>Punto</h1>
    </div>
    <form>
      <div class="row">
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}> Precio </label>
           <input type="text" class="form-control"  />
        </div>
        
        
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Fecha Inicio</label>
          <input type="date" class="form-control"  />
        </div>
        <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>Fecha Fin</label>
        <input type="date" class="form-control"  />
      </div>
         
        
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Punto De Venta Tienda Fisica</label>
          <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
            <option value="">Seleccione un Punto De La Tienda Fisica</option>
            <option value="">E</option>
            <option value="">V</option>

          </select>
        </div>
        </div>
    </form>
  </div>
  );
}

export default FormPunto;