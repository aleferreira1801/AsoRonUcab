import React from "react";

function FormPersonaNatural() {
  return (
    <div class="container p-4">
      <div class="text-center">
        <h1>Persona Natural</h1>
      </div>
      <form>
        <div class="row">
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Rif </label>
             <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Cedula</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}> Primer Nombre</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Segundo Nombre</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una pagina</option>
            </select>
          </div>
            <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Primer Apellido</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Segundo Apellidol</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Direccion Habitacion</label>
            <input type="text" class="form-control"  />
          </div>
           <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Genero</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una Genero</option>
              <option value="">Femenino</option>
              <option value="">Masculino</option>
              <option value="">Otro</option>

            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Puntos</label>
            <input type="text" class="form-control"  />
            
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Nacionalidad</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione la nacionalidad</option>
              <option value="">E</option>
              <option value="">V</option>

            </select>
          </div>
          <div class="col-md-4">
          <label style={{ fontWeight: "bold" }}>Fecha de Nacimiento</label>
          <input type="text" class="form-control"  />
          
        </div>
        <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Persona Juridica</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione una Persona Juridica</option>
              
            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Proveedor</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione un proveedor</option>
              <option value="">E</option>
              <option value="">V</option>

            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Lugar</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione la nacionalidad</option>
              <option value="">E</option>
              <option value="">V</option>

            </select>
          </div>
          <div class="col-md-4">
            <label style={{ fontWeight: "bold" }}>Lugar 2</label>
            <select class="form-control" id="fk_id_anejamiento" name="fk_id_anejamiento">
              <option value="">Seleccione la nacionalidad</option>
              

            </select>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <button type="button" class="btn btn-dark">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default FormPersonaNatural;