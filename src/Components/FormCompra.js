import React from "react";
import {Link} from 'react-router-dom'


function FormCompra() {
 

  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Compra</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Numero </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Fecha</label>
            <input type="date" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Total</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Punto De Venta</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un punto de venta</option>
            </select>
          </div>
            
           
           
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Proveedor</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una Proveedor</option>
            </select>
          </div>
        </div>
        <div class="form-check">
        <Link to="/Efectivo"> 
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
        </Link>
        <label style={{ fontWeight: "bold" }}>
            Efectivo
        </label>
      </div>
      <div class="form-check">
      <Link to="/TarjetaCredito"> 
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        </Link>
        <label class="form-check-label" for="exampleRadios2"  style={{ fontWeight: "bold" }}>
          Tarjeta De Debito
        </label>
      </div>
      <div class="form-check">
      <Link to="/TarjetaCredito"> 
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      </Link>
      <label class="form-check-label" for="exampleRadios2"  style={{ fontWeight: "bold" }}>
        Tarjeta De Credito
      </label>
    </div>
    <div class="form-check">
    <Link to="/PuntoAfiliado"> 
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      </Link>
      <label class="form-check-label" for="exampleRadios2"  style={{ fontWeight: "bold" }}>
        Punto Afiliado
      </label>
    </div>
    <div class="form-check">
    <Link to="/Cheque"> 
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      </Link>
      <label class="form-check-label" for="exampleRadios2"  style={{ fontWeight: "bold" }}>
        Cheque
      </label>
    </div>
    <div class="form-check">
    <Link to="/PagoVenta"> 
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      </Link>
      <label class="form-check-label" for="exampleRadios2"  style={{ fontWeight: "bold" }}>
        Pago Venta
      </label>
    </div>
       
        <div class="col-12 text-center mt-4">
        <Link to="/DetalleCompra"> 
          <button type="button" class="btn btn-dark">Confitmar</button>
          </Link>

          
          
        </div>
      
      
      </form>
    </div>
  );
}

export default FormCompra;