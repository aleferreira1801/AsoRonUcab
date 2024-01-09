import { useState, useEffect } from "react";
import Axios from "axios";

const ListPersonaNatural = () => {
  const [persona_naturalList, setListaPersonanatural] = useState([]);

  const getpersonaNatural = async () => {
    try {
      const response = await Axios.get("http://localhost:3006/persona_natural");
      setListaPersonanatural(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getpersonaNatural();
  }, []);

  const renderTableRows = () => {
    return persona_naturalList.map((val, key) => (
      <tr key={val.id_persona_natural}>
        <th scope="row">{val.id_persona_natural}</th>
        <td>{val.rif_persona_natural}</td>
        <td>{val.ci_natural}</td>
        <td>{val.p_nombre_natural}</td>
        <td>{val.s_nombre_natural}</td>
        <td>{val.p_apellido_natural}</td>
        <td>{val.s_apellido_natural}</td>
        <td>{val.direccion_envio}</td>
        <td>{val.genero}</td>
        <td>{val.puntos_natural}</td>
        <td>{val.fecha_nacimiento_natural}</td>
        <td>{val.fk_id_persona_juridica}</td>
        <td>{val.fk_id_proveedor}</td>
        <td>{val.fk_id_lugar}</td>
        <td>{val.fk_id_lugar_2}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Tabla Persona Natural
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rif</th>
                <th scope="col">Cedula</th>
                <th scope="col">Primer Nombre</th>
                <th scope="col">Segundo Nombre</th>
                <th scope="col">Primer Apellido</th>
                <th scope="col">Segundo Apellido</th>
                <th scope="col">Direccion Habitacion</th>
                <th scope="col">Genero</th>
                <th scope="col">Puntos</th>
                <th scope="col">Fecha De Nacimiento</th>
                <th scope="col">Persona Juridica</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Lugar</th>
                <th scope="col">Lugar2</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPersonaNatural;
