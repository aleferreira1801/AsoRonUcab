import React from 'react'

function ListCategoriaIngrediente() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Tipo Ron 
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> categoria </th>
            <th scope="col"> Ingrediente</th>
           
            
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Mark</td>
            <td>Otto</td>
            
           
            
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
export default ListCategoriaIngrediente;