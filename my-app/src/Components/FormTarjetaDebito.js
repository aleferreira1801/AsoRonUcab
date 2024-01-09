import React from "react";

function FormTarjetaDebito() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Tarjeta De Debito</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Numero  </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Fecha vence </label>
            <input type="Fecha" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Codigo De Seguridad</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}> Nombre Banco</label>
          <input type="date" class="form-control"  />
        </div>
        <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>Usuario</label>
        <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
          <option value="">Seleccione un Usuario</option>
          <option value="">https</option>
          <option value="">ftp</option>

        </select>
      </div>

      <div class="col-md-4">
      <label style={{ fontWeight: "bold" }}>Tasa De Cambio</label>
      <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
        <option value="">Seleccione una Tasa De Canbio</option>
        <option value=""></option>
        <option value=""></option>

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

export default FormTarjetaDebito;