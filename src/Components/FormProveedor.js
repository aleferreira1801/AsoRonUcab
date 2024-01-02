

function formproveedor() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Proveedor </h1>
         </div>
        <form>
      <div class="row">
    <div class="col">
    <h6>nombre</h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6>denominacion  comercial </h6>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <h6>afiliacion proveedor</h6>
    <input type="text" class="form-control" />
  </div>
<div class="col">
<h6> persona juridica</h6>
<select id="inputstate" class="form-control">
<option selected></option>
<option>festival de ron caracas</option>
<option>curiosidades del ron</option>
</select>
</div>
</div>
  






<div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        aceptar
       
        </button>
      </div>
      
      </form>
      </div>
);

}
export default formproveedor;