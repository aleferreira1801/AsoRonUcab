import React from "react";

function FormColor() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Color</h1>
      </div>
      <form>
        <div class="row">
         
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Nombre </label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Proveedor</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un Proveedor</option>
            </select>
          </div>
          <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Ron</label>
          <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
            <option value="">Seleccione un Ron</option>
          </select>
        </div>
        <div class="col">
        <h6>Descripcion</h6>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormColor;