import React from "react";

function FormBarril() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Barril</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Calidad </label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione la Calidad del barril</option>
              <option value="">Malo</option>
              <option value="">Regular</option>
              <option value="">Bueno</option>
              <option value="">Muy Bueno</option>
              <option value="">Excelente</option>
            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Tipo </label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Anejamiento</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un anejamiento</option>
            </select>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormBarril;
