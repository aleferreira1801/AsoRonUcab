import React from 'react'

function ListEmpleado() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Tabla Empleado
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Profesion </th>
            <th scope="col"> Titulo Puesto Empleado</th>
            <th scope="col"> Feha Hora Inicio Turno</th>
            <th scope="col"> Fecha Hora Fin Turno</th>
            <th scope="col"> Supervisor</th>
            <th scope="col">Persona Natural</th>
            <th scope="col">Punto De Venta</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
           
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
         
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListEmpleado;