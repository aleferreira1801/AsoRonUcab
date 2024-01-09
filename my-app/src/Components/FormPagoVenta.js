import React from "react";

function FormPagoVenta() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Pago Venta</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Monto </label>
             <input type="text" class="form-control"  />
          </div>
          
          
        <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>Venta</label>
        <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
          <option value="">Seleccione una Venta</option>
          <option value="">https</option>
          <option value="">ftp</option>

        </select>
      </div>
      <div class="col-md-4">
        <label style={{ fontWeight: "bold" }}>Efectivo</label>
        <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
          <option value="">Seleccione un Efectivo</option>
          <option value=""></option>
          <option value=""></option>

        </select>
      </div>
      

      <div class="col-md-4">
      <label style={{ fontWeight: "bold" }}>Tarjeta Debito</label>
      <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
        <option value="">Seleccione la Tarjeta De Debito</option>
        <option value=""></option>
        <option value=""></option>

      </select>
    </div>
    <div class="col-md-4">
    <label style={{ fontWeight: "bold" }}>Punto Afiliado</label>
    <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
      <option value="">Seleccione un Punto Afiliado</option>
      <option value=""></option>
      <option value=""></option>

    </select>
  </div>
  <div class="col-md-4">
  <label style={{ fontWeight: "bold" }}>Cheque</label>
  <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
    <option value="">Seleccione un Cheque</option>
    <option value=""></option>
    <option value=""></option>

  </select>
</div>
<div class="col-md-4">
<label style={{ fontWeight: "bold" }}>Tarjeta Credito</label>
<select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
  <option value="">Seleccione una Tarjeta De Credito</option>
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

export default FormPagoVenta;