const express= require("express");
const app= express()
const cors = require("cors");
const pg = require('pg');
app.use(cors());
app.use(express.json());

const client = new pg.Client({
    host: "localhost",
    port: 5432,
    database: "AsoRonUcab",
    user: "postgres",
    password: "1234",
  });
  
  module.exports = client;



app.post("/create", (req,res)=>{
    const rif_persona_natural  = req.rif_persona_natural;
    const ci_natural   = req.body.ci_natural   ;
    const p_nombre_natural = req.body.p_nombre_natural;
    const s_nombre_natural = req.body.s_nombre_natural ;
    const p_apellido_natural= req.body.p_apellido_natural;
    const s_apellido_natural  = req.body.s_apellido_natural  ;
    const  direc_hab_natural  = req.body. direc_hab_natural  ;
    const  genero   = req.body.genero  ;
    const  puntos_natural   = req.body.puntos_natural  ;
    const  direccion_envio    = req.body. direccion_envio  ;
    const  nacionalidad_natural     = req.body. nacionalidad_natural    ;
    const   fecha_nacimiento_natural   = req.body. fecha_nacimiento_natural   ;
    const    fk_id_persona_juridica  = req.body. fecha_nacimiento_natural   ;
    const     fk_id_proveedor      = req.body.fk_id_proveedor       ;
    const      fk_id_lugar         = req.body. fk_id_lugar          ;
    const      fk_id_lugar_2          = req.body.fk_id_lugar_2           ;
    
    client.query('INSERT INTO persona_natural (rif_persona_natural, ci_natural, p_nombre_natural, s_nombre_natural, p_apellido_natural, s_apellido_natural, direc_hab_natural, genero, puntos_natural, direccion_envio, nacionalidad_natural, fecha_nacimiento_natural) values (?,?,?,?,?,?,?,?,?,?,?,?);',[rif_persona_natural,ci_natural,p_nombre_natural,s_nombre_natural,p_apellido_natural,s_apellido_natural, direc_hab_natural,genero,puntos_natural,direccion_envio,nacionalidad_natural,fecha_nacimiento_natural,fk_id_persona_juridica, fk_id_proveedor,fk_id_lugar,fk_id_lugar_2],
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });

});


app.put("/update", (req,res)=>{
    const   id_persona_natural   = req.id_persona_natural ;
    const rif_persona_natural  = req.rif_persona_natural;
    const ci_natural   = req.body.ci_natural   ;
    const p_nombre_natural = req.body.p_nombre_natural;
    const s_nombre_natural = req.body.s_nombre_natural ;
    const p_apellido_natural= req.body.p_apellido_natural;
    const s_apellido_natural  = req.body.s_apellido_natural  ;
    const  direc_hab_natural  = req.body. direc_hab_natural  ;
    const  genero   = req.body.genero  ;
    const  puntos_natural   = req.body.puntos_natural  ;
    const  direccion_envio    = req.body. direccion_envio  ;
    const  nacionalidad_natural     = req.body. nacionalidad_natural    ;
    const   fecha_nacimiento_natural   = req.body. fecha_nacimiento_natural   ;
   
    
    client.query('UPDATE persona_natural SET rif_persona_natural = ?, ci_natural=?, p_nombre_natural=?, s_nombre_natural=?, p_apellido_natural=?,s_apellido_natural=?,direc_hab_natural=?,genero=?, puntos_natural=?,direccion_envio=?,nacionalidad_natural=?,fecha_nacimiento_natural=? where id_persona_natural=?;',[rif_persona_natural,ci_natural,p_nombre_natural,s_nombre_natural,p_apellido_natural,s_apellido_natural, direc_hab_natural,genero,puntos_natural,direccion_envio,nacionalidad_natural,fecha_nacimiento_natural,id_persona_natural],
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });

});

app.get("/persona_natural", (req,res)=>{
    
    client.query('SELECT * FROM departamento;',
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });

});
const port = process.env.PORT || 3006
app.listen(port, ()=>{
    console.log(`corriendo en el puerto ${port}`)
});


