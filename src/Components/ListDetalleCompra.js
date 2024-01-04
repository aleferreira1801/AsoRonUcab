import React from 'react'

function ListDetalleCompra() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Detalle Compra
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Cantidad Producto Total</th>
            <th scope="col">Compra</th>
            <th scope="col">Presentacion Ron</th>
            <th scope="col">Catalogo Inventario Ron</th>
            <th scope="col">Punto De Venta</th>
            
            
            
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td>Mark</td>
           
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td>Mark</td>
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
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
export default ListDetalleCompra;