import React from "react";

function FormAnejamiento() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Anejamiento</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-5 m-1">
            <label style={{ fontWeight: "bold" }}>
              Nombre
              <input type="text" class="form-control" />
            </label>
          </div>
          <div class="col-md-5 m-1">
            <label style={{ fontWeight: "bold" }}>Fecha Inicio</label>
            <input type="date" class="form-control" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 m-1">
            <label style={{ fontWeight: "bold" }}>Fecha Fin</label>
            <input type="date" class="form-control" />
          </div>
          <div class="col-md-10 m-1">
            <label style={{ fontWeight: "bold" }}>Descripción</label>
            <textarea class="form-control" rows="5" id="comment" placeholder="Mensaje"></textarea>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormAnejamiento;

