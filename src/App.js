import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import login from "./pages/login";
import Tienda from "./pages/Tienda";
import Compra from "./pages/Compra";
import detalle from "./pages/detalle";
import Evento from "./pages/Evento";
import Proveedor from "./pages/Proveedor"
import Empleado from "./pages/Empleado"
import Departamento from "./pages/Departamento"
import Cliente from "./pages/Cliente";
import ProveedorAfiliado from "./pages/ProveedorAfiliado";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contacto from "./pages/Contacto";
import DetalleEvento from "./Components/DetalleEvento";
import EntradaEvento from "./pages/EntradaEvento";
import Venta from "./pages/Venta";
import DetalleSantaTeresaBlanco from "./pages/DetalleSantaTeresaBlanco";
import Pedido from "./pages/Pedido";
import EstadoPedido from "./pages/EstadoPedido";
import DetallePedido from "./pages/DetallePedido";
import CuotaAfiliacion from "./pages/CuotaAfiliacion";
import Premio from "./pages/Premio";
import PagoEntrada from "./pages/PagoEntrada";
import AgregarEvento from "./pages/AgregarEvento";
import Beneficio from "./pages/Beneficio";
import Anejamiento from "./pages/Anejamiento";
import TipOrON from "./pages/TipoRon";
import VariedadRon from "./pages/VariedadRon";
import Barril from "./pages/Barril";
import CategoriaIngrediente from "./pages/CategoriaIngrediente";
import PersonaJuridica from "./pages/PersonaJuridica";
import ProveedorPartiEvent from "./pages/ProveedorPartiEvent";
import NotaCata from "./pages/NotaCata";

import PersonaNatural from "./pages/PersonaNatural";
import EmpleadoDepartamento from "./pages/EmpleadoDepartamento";
import BeneficioEmpleado from "./pages/BeneficioEmpleado";

import DetalleVenta from "./pages/DetalleVenta";
import Sabor from "./pages/Sabor";
import Color from "./pages/Color";
import Ingrendiente from "./pages/Ingrendiente";
import Metodo from "./pages/Metodo";
import Destilacion from "./pages/Destilacion";
import Categoria from "./pages/Categoria";
import TasaCambio from "./pages/TasaCambio";
import PuntoDeVenta from "./pages/PuntoDeVenta";
import PuntoDeVentaTiendaFisica from "./pages/PuntoDeVentaTiendaFisica";
import Punto from "./pages/Punto";
import PuntoDeVentaTiendaOnline from "./pages/PuntoDeVentaTiendaOnline";
import Efectivo from "./pages/Efectivo";
import TarjetaDebito from "./pages/TarjetaDebito";
import TarjetaCredito from "./pages/TarjetaCredito";
import PuntoAfiliado from "./pages/PuntoAfiliado";
import Cheque from "./pages/Cheque";
import PagoVenta from "./pages/PagoVenta";
import DetalleCompra from "./pages/DetalleCompra";






function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" Component={Home}/>
         
          <Route exact path="/Empleado" Component={Empleado}/>
          <Route exact path="/login" Component={login}/>
          <Route exact path="/Usuario" Component={Usuario}/>
          <Route exact path="/Tienda" Component={Tienda}/>
          <Route exact path="/Compra" Component={Compra}/>
          <Route exact path="/detalle" Component={detalle}/>
          <Route exact path="/Evento" Component={Evento}/>
          <Route exact path="/Contacto" Component={Contacto}/>
          <Route exact path="/Proveedor" Component={Proveedor}/>
          <Route exact path="/Departamento" Component={Departamento}/>
          <Route exact path="/Cliente" Component={Cliente}/>
          <Route exact path="/ProveedorAfiliado" Component={ProveedorAfiliado}/>
          <Route exact path="/DetalleEvento" Component={DetalleEvento}/>
          <Route exact path="/EntradaEvento" Component={EntradaEvento}/>
          <Route exact path="/Venta" Component={Venta}/>
          <Route exact path="/DetalleSantaTeresa" Component={DetalleSantaTeresaBlanco}/>
          <Route exact path="/Pedido" Component={Pedido}/>
          <Route exact path="/EstadoPedido" Component={EstadoPedido}/>
          <Route exact path="/DetallePedido" Component={DetallePedido}/>
          <Route exact path="/CuotaAfiliacion" Component={CuotaAfiliacion}/>
          <Route exact path="/Premio" Component={Premio}/>
          <Route exact path="/PagoEntrada" Component={PagoEntrada}/>
          <Route exact path="/AgregarEvento" Component={AgregarEvento}/>
          <Route exact path="/Beneficio" Component={Beneficio}/>
          <Route exact path="/Anejamiento" Component={Anejamiento}/>
          <Route exact path="/TipoRon" Component={TipOrON}/>
          <Route exact path="/variedadRon" Component={VariedadRon}/>
          <Route exact path="/Barril" Component={Barril}/>
          <Route exact path="/CategoriaIngrediente" Component={CategoriaIngrediente }/>
          <Route exact path="/PersonaJuridica" Component={PersonaJuridica }/>
          <Route exact path="/ProveedorPartiEvent" Component={ ProveedorPartiEvent}/>
          <Route exact path="/NotaCata" Component={ NotaCata}/>
          <Route exact path="/PersonaNatural" Component={ PersonaNatural}/>
          <Route exact path="/EmpleadoDepartamento" Component={ EmpleadoDepartamento}/>
          <Route exact path="/BeneficioEmpleado" Component={BeneficioEmpleado}/>
          <Route exact path="/DetalleVenta" Component={DetalleVenta}/>
          <Route exact path="/Sabor" Component={Sabor}/>
          <Route exact path="/COlor" Component={Color}/>
          <Route exact path="/Ingrendiente" Component={Ingrendiente}/>
          <Route exact path="/Metodo" Component={Metodo}/>
          <Route exact path="/Destilacion" Component={Destilacion}/>
          <Route exact path="/Categoria" Component={Categoria}/>
          <Route exact path="/TasaCambio" Component={TasaCambio}/>
          <Route exact path="/PuntoDeVenta" Component={PuntoDeVenta}/>
          <Route exact path="/PuntoDeVentaTiendaFisica" Component={PuntoDeVentaTiendaFisica}/>
          <Route exact path="/Punto" Component={Punto}/>
          <Route exact path="/PuntoDeVentaTiendaOnline" Component={ PuntoDeVentaTiendaOnline}/>
          <Route exact path="/Punto" Component={Punto}/>
          <Route exact path="/Efectivo" Component={ Efectivo}/>
          <Route exact path="/TarjetaDebito" Component={ TarjetaDebito}/>
          <Route exact path="/TarjetaCredito" Component={ TarjetaCredito}/>
          <Route exact path="/PuntoAfiliado" Component={ PuntoAfiliado}/>
          <Route exact path="/Cheque" Component={ Cheque}/>
          <Route exact path="/PagoVenta" Component={ PagoVenta}/>
          <Route exact path="/DetalleCompra" Component={ DetalleCompra}/>





       
       
       
       
       
       
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
