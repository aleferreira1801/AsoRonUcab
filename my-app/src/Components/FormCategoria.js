import React from "react";

function FormCategoria() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Categoria</h1>
      </div>
      <form>
        <div class="row">
         
          
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Nombre</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un Nombre</option>
              <option value="">Estandar</option>
              <option value="">Premium</option>
              <option value="">Super Premium</option>
              <option value="">Ultra Premium</option>
              <option value="">Prestige</option>
            </select>
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Porcentaje </label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Destilacion</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una Destilacion</option>
            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Grado De Alcohol </label>
            <input type="text" class="form-control"  />
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;