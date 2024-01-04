import React from 'react'

function ListTasaCambio() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Tasa De Cambio
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Valor </th>
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
           
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
           
         
           
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            
           
            
         
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListTasaCambio;