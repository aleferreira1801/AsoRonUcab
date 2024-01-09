import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logoronpagina.png'

function Encabezado() {
  return (
    <main>
    <div class="container marketing">

        
        <div class="row">
        <hr/>
        <h1 class="display-4">Que quieres tomar hoy </h1>
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://www.freshfishdelivery.com/cdn/shop/products/RONLEGENDARIO_1024x.jpg?v=1616185256" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Ron Carúpano Legendario</h2>
            <p>Ron Viejo de Colección de 40° G.L. Único en Venezuela y el mundo, procedente de un exclusivo lote con 25 años de añejamiento cerrado, sin reposición de mermas, ni mezclas.</p>
            
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://alnavio.es/wp-content/uploads/2021/07/alnavio.es_fotos_1_Santa-Teresa-1796.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Ron Santa Teresa 1796</h2>
            <p>Santa Teresa 1796, es un ron Súper Premium, audaz y elegante, hecho con una mezcla de rones desde 4 y hasta 35 años de envejecimiento en barricas de roble, a través del complejo proceso de añejamiento de Solera.</p>
            
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://d2j6dbq0eux0bg.cloudfront.net/images/28254021/2829186974.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Ron Calazan Premium 6 Años</h2>
            <p>Es un ron de 4 a 6 años de añejamiento en barriles de Roble Blanco Americano. Ron excepcional que posee aromas dulces y de madera, una fragancia obtenida por sus Blends de bases semi-pesadas y pesadas.</p>
          </div>
          <Link to="/Tienda"> 
          <div class="col text-center">
          <button type="button" class="btn btn-dark">Catalogo</button>
          </div>
          </Link>
        </div>


        <hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Quienes Somos <span class="text-muted">ASONRONUCAB</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={logo} alt="Generic placeholder image" width="200px" height="200px"/>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Producto de calidad <span class="text-muted">ASONRONUCAB</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="https://dosmaderas.com/wp-content/uploads/2021/10/Dos-Maderas-rum-Cocktail-East-India-Negroni-HERO-8-1024x684.jpg" alt="Generic placeholder image" width="300px" height="300px"/>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Porque Comprar con nosotros <span class="text-muted">ASONRONUCAB</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://lacaretalicores.com/cdn/shop/products/Untitled-1-31.jpg?v=1654020640" alt="Generic placeholder image" width="200px" height="200px"/>
          </div>
        </div>

        <hr class="featurette-divider"/>

        </div>


      
    </main>


  )
}
export default Encabezado;