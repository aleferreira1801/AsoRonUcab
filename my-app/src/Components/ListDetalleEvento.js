import React from 'react'

function ListDetalleEvento() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
           Evento
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Nombre</th>
            <th scope="col"> Descripcion</th>
            <th scope="col">Numero Edicion</th>
            <th scope="col">Fecha Inicio </th>
            <th scope="col">Fecha Fin </th>
            <th scope="col">Localizacion</th>
            <th scope="col">Limite Ocupacion</th>
            
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            
            
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListDetalleEvento;