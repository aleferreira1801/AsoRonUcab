import React from "react";

function FormTasaCambio() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Tasa De Cambio</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Valor  </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Fecha Inicio</label>
            <input type="date" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Fecha Fin</label>
            <input type="date" class="form-control"  />
          </div>
          
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormTasaCambio;