import React from "react";

 function Contacto() {   
    return (
        <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://www.decantalo.com/es/img/cms/%C2%BFC%C3%B3mo-se-elabora-el-ron-_.jpg" alt=""
        class="rounded float-start" height="400px" width="600px"/>
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">
         <div class="text-center">
         <h1> Contacto </h1>
         </div>
  
        <form class="row g-3" >
        <div class="form-group">
    <label for="formGroupExampleInput">Nombre</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el nombre"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Correo Electronico</label>
    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput2">Telefono</label>
    <input type="text" class="form-control" id="inputEmail3" placeholder="Ingrese el numero de telefono"/>
  </div>
  <div class="form-group">
  <label for="comment">Mensaje</label>
  <textarea class="form-control" rows="5" id="comment" placeholder="Mensaje"></textarea>
</div>
        <div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        Enviar
       
        </button>
        
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
        
    );
}
export default Contacto;