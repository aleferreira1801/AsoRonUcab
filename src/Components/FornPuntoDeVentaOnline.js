import React from "react";

function FormPuntoDeVentaTiendaOnline() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Punto De Venta De Tienda Online</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Nombre  </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Mision</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Rif</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}> Fecha Origen</label>
          <input type="date" class="form-control"  />
        </div>
        <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>url</label>
        <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
          <option value="">Seleccione un URL</option>
          <option value="">https</option>
          <option value="">ftp</option>

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

export default FormPuntoDeVentaTiendaOnline;