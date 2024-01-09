import React from "react";

function FormTipoRon() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Tipo Ron</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Nombre Ron</label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione un nombre del ron</option>
              <option value="">Agricola</option>
              <option value="">Industrial</option>
            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Lugar</label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione un lugar</option>
            </select>
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

export default FormTipoRon;
