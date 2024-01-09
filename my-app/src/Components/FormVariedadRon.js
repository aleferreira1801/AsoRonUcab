import React from "react";

function FormVariedadRon() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1> Variedad Ron</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Nombre</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Porcentaje</label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione un porcentaje</option>
            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Tipo Ron</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione el tipo de ron</option>
            </select>
          </div>
          <div class="col-md-17">
            <label style={{ fontWeight: "bold" }}>Descripcion</label>
            <textarea class="form-control" rows="5" id="comment" placeholder="Coloque una descripcion"></textarea>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormVariedadRon;