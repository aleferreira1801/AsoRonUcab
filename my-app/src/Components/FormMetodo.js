import React from "react";

function FormMetodo() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Metodo</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Nombre </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Descripcion</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          </div>
         
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormMetodo;