import React from "react";

function FormPuntoDeVentaTiendaFisica() {
  return (
    <div class="container p-4">
    <div class="text-center">
      <h1>Punto De Venta Tienda Fisica</h1>
    </div>
    <form>
      <div class="row">
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}> Nombre </label>
           <input type="text" class="form-control"  />
        </div>
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Mision</label>
          <input type="text" class="form-control"  />
        </div>
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}> RIF</label>
          <input type="text" class="form-control"  />
        </div>
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Fecha Oringen</label>
          <input type="date" class="form-control"  />
        </div>
          <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Direccion</label>
          <input type="text" class="form-control"  />
        </div>
         <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Numero Local</label>
          <input type="text" class="form-control"  />
        </div>
         <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Hora Entrada</label>
          <input type="time" class="form-control"  />
        </div>
         <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Hora salida</label>
          <input type="time" class="form-control"  />
        </div>
        
        <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Lugar</label>
          <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
            <option value="">Seleccione un Lugar</option>
            <option value="">E</option>
            <option value="">V</option>

          </select>
        </div>
        </div>
    </form>
  </div>
  );
}

export default FormPuntoDeVentaTiendaFisica;