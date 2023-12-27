
import React from "react";




function FormEmpleado() {
  
  
  return (
    <div class="container">

      <div class="text-center">
        <h1> Empleado</h1>
      </div>
      <form>
        <div class="row">
          <div class="col">
           
            <label style={{ fontWeight: "bold" }}>
              Nombre
              <input type="text" class="form-control"  />
            </label>
          
            

          
            <label style={{ fontWeight: "bold" }}>
              Contraseña

              <input  type="password" class="form-control" />

            </label>
          
            

            
            <label style={{ fontWeight: "bold" }}> 
              Fecha
              <input type="date" class="form-control" />
            </label>


            <label style={{ fontWeight: "bold" }}>
              Numero
              <input type="text" class="form-control" />
            </label>

            <label style={{ fontWeight: "bold" }}>
              Profesion
              <input type="text" class="form-control" />
            </label>

            <label style={{ fontWeight: "bold" }}>
               Fecha Inicio Trabajo
              <input type="date" class="form-control"  />
            </label>



            <label style={{ fontWeight: "bold" }}>Titulo Puesto Trabajo
              <input type="text" class="form-control" />
            </label>


            <label style={{ fontWeight: "bold" }}>
              Hora Inicio Turno
              <input type="time"  class="form-control" />
            </label>


            <label style={{ fontWeight: "bold" }}> 
              Hora Final Turno
              <input type="time"  class="form-control" />
            </label>


            <label style={{ fontWeight: "bold" }}>
              Supervisor
              <input type="text" class="form-control" />
            </label>



            <label style={{ fontWeight: "bold" }}> 
              Persona Natural
              <select id="inputState" class="form-control">
                <option selected></option>
                <option>Festival De Ron Caracas</option>
                <option>Curiosidades Del Ron</option>
              </select>
            </label>


            <label style={{ fontWeight: "bold" }}> 
               Punto De Venta
              <select id="inputState" class="form-control">
                <option selected></option>
                <option>Festival De Ron Caracas</option>
                <option>Curiosidades Del Ron</option>
              </select>
            </label>


          </div>
        </div>




        <div class="col-12 text-center">
          <button type="button" class="btn btn-dark"  >
            Aceptar

          </button>
        </div>


      </form>
    </div>

  );
}
export default FormEmpleado;