import React from 'react'

function FormDetallePedido() {   
    return (
      <div class="container">

      <div class="text-center">
       <h1>Detalle Pedido</h1>
       </div>
      <form>
<div class="row">
  <div class="col">
  <h6>Precio Envio</h6>
    <input type="text" class="form-control"/>
  </div>
  <div class="col">
  <h7>Cantidad Producto</h7>
  <input type="text" class="form-control" />
</div>
<div class="col">
<h6> Pedido</h6>
<select id="inputState" class="form-control">
<option selected> </option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div>
</div>
</form>

<form>
<div class="Row">
<div class="col">
<h6> Presentacion Ron </h6>
<select id="inputState" class="form-control">
<option selected> </option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div>
<div class="col">
<h6> Catalogo Inventario</h6>
<select id="inputState" class="form-control">
<option selected> </option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div> 
<div class="col">
<h6> Catalogo Inventario</h6>
<select id="inputState" class="form-control">
<option selected> </option>
<option>Festival De Ron Caracas</option>
<option>Curiosidades Del Ron</option>
</select>
</div> 

</div>



<div class="col-12 text-center ">
      <button type="button"  class="btn btn-dark"  >
      Aceptar
     
      </button>
    </div>


    </form>
    </div>
);

}
export default FormDetallePedido;