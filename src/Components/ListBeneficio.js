import React from 'react'

function ListBeneficio() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Tabla Beneficio
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Nombre </th>
            <th scope="col"> Descripcion</th>
            <th scope="col"> Fecha Inicio</th>
            <th scope="col"> Fecha Fin</th>
            
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td>@mdo</td>
           
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
           
            <td>Otto</td>
           
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            
            <td>Otto</td>
            
         
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListBeneficio;