import React from 'react'

function ListColor() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Color
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Nombre </th>
            <th scope="col"> Proveedor</th>
            <th scope="col"> Ron</th>
            <th scope="col"> Descripcion</th>
           
            
           
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
            <td>@mdo</td> 
           
         
           
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td> 
            
           
            
         
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListColor;