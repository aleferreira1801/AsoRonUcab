import React from "react";

function FormPersonaJuridica() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Persona Juridica</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Rif </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Denominacion Comercial</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Razon Social</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Pagina Web</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una pagina</option>
            </select>
          </div>
            <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Capital Disponible</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Direccion Fiscal</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Direccion Fisica Principal Juridica</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Lugar</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una Lugar</option>
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

export default FormPersonaJuridica;