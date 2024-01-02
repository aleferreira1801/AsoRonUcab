import React from "react";

function FormNotaCata() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1> Nota Cata</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Ron</label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione un proveedor</option>
              
            </select>
          </div>
         
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Proveedor</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un evento</option>
            </select>
          </div>
          <div >
          <label style={{ fontWeight: "bold" }}>Descripcion</label>
                 <textarea class="form-control"  id="comment" ></textarea>
            </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormNotaCata;