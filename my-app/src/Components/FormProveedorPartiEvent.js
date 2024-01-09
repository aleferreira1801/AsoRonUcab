import React from "react";

function FormProveedorPartiEvent() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Proveedor Participa Evento</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Proveedor</label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione un proveedor</option>
              
            </select>
          </div>
         
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Evento</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un evento</option>
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

export default FormProveedorPartiEvent;