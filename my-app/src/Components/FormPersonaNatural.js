
// Importar el archivo funciones.js

import {useState} from "react"
import Axios from "axios"





function FormPersonaNatural() {

  const [rif_persona_natural,setrif_persona_natural] =  useState("");
  const [ci_natural,setci_natural]   = useState("");  
  const [p_nombre_natural, setp_nombre_natural]=  useState("");
  const [s_nombre_natural,sets_nombre_natural] =  useState(""); 
  const [p_apellido_natural, setp_apellido_natural]=  useState("");
  const [s_apellido_natural, sets_apellido_natural] =  useState("");  
  const  [direc_hab_natural, setdirec_hab_natural] =  useState("");  
  const  [genero,setgenero]   =  useState(""); 
  const  [puntos_natural,setpuntos_natural]   =  useState(""); 
  const  [direccion_envio,setdireccion_envio ]  =  useState("");  
  const  [nacionalidad_natural, setnacionalidad_natural]    =  useState("")    ;
  const   [fecha_nacimiento_natural, setfecha_nacimiento_natural]   =  useState("");   
  const   [ fk_id_persona_juridica, setfk_id_persona_juridica]=  useState("")  ;
  const    [fk_id_proveedor,setfk_id_proveedor ]    =  useState("");      
  const    [fk_id_lugar, setfk_id_lugar ]     =  useState("");        
  const      [fk_id_lugar_2 , setfk_id_lugar_2  ]      =  useState("");         
  
 
  const add= ()=>{
    Axios.post('http://localhost:3006/create',{
      rif_persona_natural:rif_persona_natural,
      ci_natural: ci_natural,
      p_nombre_natural: p_nombre_natural,
      s_nombre_natural: s_nombre_natural,
      s_apellido_natural: s_apellido_natural,
      direc_hab_natural: direc_hab_natural,
      genero : genero,
      direccion_envio: direccion_envio,
      nacionalidad_natural: nacionalidad_natural,
      fecha_nacimiento_natural: fecha_nacimiento_natural,
      fk_id_persona_juridica : fk_id_persona_juridica,
      fk_id_proveedor: fk_id_proveedor,
      fk_id_lugar : fk_id_lugar,
      fk_id_lugar_2  : fk_id_lugar_2,
      
    })

    if ( rif_persona_natural === "" || ci_natural === "" || p_nombre_natural === "") {
      // Los datos están vacíos
      alert("Los datos están vacíos.");
      return;
    }
  
    alert("Los datos se enviaron correctamente.");
  }
  
    
    
  

 

 



  return (
    <div className="container p-4">
      <div className="text-center">
        <h1>Persona Natural</h1>
      </div>
      <form >
        <div className="row">
          <div className="col-md-4">
        
          <input type="text" placeholder="rif"  value={rif_persona_natural} aria-label=" First name"  className="form-control" name="rif_persona_natural"
            onChange={(e)=>{
              setrif_persona_natural(e.target.value);
             }}/> 

          </div>
          <div className="col-md-4">
            
            <input type="text"  value={ci_natural}  name="ci_natural"  className="form-control" aria-label=" First name" placeholder="CI"
            onChange={(e)=>{
              setci_natural(e.target.value);
             }}/> 
          </div>
          <div className="col-md-4">
          
            <input type="text" value={p_nombre_natural} name="p_nombre_natural" className="form-control" aria-label=" First name" placeholder="Primer Nombre"
            onChange={(e)=>{
              setp_nombre_natural(e.target.value);
             }}/> 
          </div>
          <div className="col-md-4">
            
            <input type="text"  value={s_nombre_natural} name="s_nombre_natural" className="form-control" aria-label=" First name" placeholder="Segundo Nombre"
            onChange={(e)=>{
              sets_nombre_natural(e.target.value);
             }}/> 
          </div>
            <div className="col-md-4">
          
            <input type="text"  value={p_apellido_natural} name="p_apellido_natural" className="form-control" aria-label=" First name" placeholder="Primer Apellido" 
            onChange={(e)=>{
              setp_apellido_natural(e.target.value);
             }}/> 
          </div>
           <div className="col-md-4">  <input type="text" className="form-control"  value={s_apellido_natural}  name="s_apellido_natural" aria-label=" First name" placeholder="Segundo Apellido"
            onChange={(e)=>{
              sets_apellido_natural(e.target.value);
             }}
            />
          </div>
           <div className="col-md-4">
          
            <input type="text"  className="form-control"  value={direc_hab_natural} name="direc_hab_natural"  aria-label=" First name" placeholder="Direccion Habitacion"
            onChange={(e)=>{
              setdirec_hab_natural(e.target.value);
             }}
             />
          </div>
          <div className="col-md-4">
          
            <input type="text"  className="form-control"  value={direccion_envio}  name="direccion_envio"  aria-label=" First name" placeholder="Direccion Envio"
            onChange={(e)=>{
              setdireccion_envio(e.target.value);
             }}
             />
          </div>
          <div className="col-md-4">
       
          <div>
          <label>Femenino</label>
            <input type="checkbox" name="genero" value="Femenino"  checked={genero === "Femenino"} onChange={(e) => {
              setgenero(e.target.checked ? "Femenino" : "");
            }} />
       
          </div>
          <div>
          <label>Masculino</label>
            <input type="checkbox" name="genero" value="Masculino" checked={genero === "Masculino"} onChange={(e) => {
              setgenero(e.target.checked ? "Masculino" : "");
            }} />
            <label>Masculino</label>
          </div>
          <div>
          <label>Otro</label>
            <input type="checkbox" name="genero" value="Otro" checked={genero === "Otro"} onChange={(e) => {
              setgenero(e.target.checked ? "Otro" : "");
            }} />
            
          </div>
        </div>
        
          <div className="col-md-4">
           
            <input type="text"  className="form-control" value={puntos_natural} name="Puntos_natural"  aria-label=" First name" placeholder="Puntos "
            onChange={(e)=>{
              setpuntos_natural(e.target.value);
             }}
            />
            
          </div>
          <div className="col-md-4">
         <label>Venezolano</label>
          <input type="checkbox" name="nacionalidad_natural" value="V" checked={nacionalidad_natural === "V" } onChange={(e) => {
            setnacionalidad_natural(e.target.checked ? "V" : "");
          }} />
          <label> Extranjero</label>
          <input type="checkbox" name="nacionalidad_natural" value="E" checked={nacionalidad_natural === "E" } onChange={(e) => {
            setnacionalidad_natural(e.target.checked ? "E" : "");
          }} />
        </div>
        
          <div className="col-md-4">
         
          <input type="date"  className="form-control" value={fecha_nacimiento_natural} name="fecha_nacimiento_natural"  aria-label=" First name" placeholder="Fecha De Nacimiento"
          onChange={(e)=>{
            setfecha_nacimiento_natural(e.target.value);
           }}  />
          
        </div>
        <div className="col-md-4">
           
            <input type="text" className="form-control" value={fk_id_persona_juridica} name="fk_id_persona_juridca"  aria-label=" First name" placeholder="Persona Juridica"
          onChange={(e)=>{
            setfk_id_persona_juridica(e.target.value);
           }}  />
            
          </div>
          <div className="col-md-4">
          
            <input type="text"  className="form-control" value={fk_id_proveedor} name="fk_id_proveedor"  aria-label=" First name" placeholder="Proveedor"
            onChange={(e)=>{
              setfk_id_proveedor(e.target.value);
             }}  />
          </div>
          <div className="col-md-4">
           
            <input type="text"  className="form-control" value={fk_id_lugar} name="fk_id_lugar" aria-label=" First name" placeholder="Lugar"
            onChange={(e)=>{
              setfk_id_lugar(e.target.value);
             }}  />
           
          </div>
          <div className="col-md-4">
          
            <input type="text"  className="form-control" value={fk_id_lugar_2} name="fk_id_lugar_2" aria-label=" First name" placeholder="Lugar"
            onChange={(e)=>{
              setfk_id_lugar_2(e.target.value);
             }}  />
          </div>
        </div>
        <div className="col-12 text-center mt-4">
          <button  onClick={add}>Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormPersonaNatural;