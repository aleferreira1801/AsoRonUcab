import React from "react";

function FormCategoriaIngrediente() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Categoria Ingrediente</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Categoria </label>
            <select class="form-control" id="fk_id_lugar" name="fk_id_lugar">
              <option value="">Seleccione la categoria</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Ingrediente</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un ingrediente</option>
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

export default FormCategoriaIngrediente;