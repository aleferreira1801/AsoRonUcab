import React from "react";

function FormDetalleCompra() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Detalle Compra</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Precio Unitario  </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Cantidad Total Producto</label>
            <input type="text" class="form-control"  />
          </div>
          
        <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>Compra</label>
        <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
          <option value="">Seleccione la Compra</option>
          <option value="">https</option>
          <option value="">ftp</option>

        </select>
      </div>

      <div class="col-md-4">
      <label style={{ fontWeight: "bold" }}>Presentacion  Ron</label>
      <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
        <option value="">Seleccione la Presentacion  Ron</option>
        <option value="">https</option>
        <option value="">ftp</option>

      </select>
    </div>

    <div class="col-md-4">
    <label style={{ fontWeight: "bold" }}>Catalogo Inventario</label>
    <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
      <option value="">Seleccione un Catalogo del Inventario</option>
      <option value=""></option>
      <option value=""></option>

    </select>
  </div>
  <div class="col-md-4">
  <label style={{ fontWeight: "bold" }}>Punto  De Venta</label>
  <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
    <option value="">Seleccione un Punto De Venta</option>
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

export default FormDetalleCompra;