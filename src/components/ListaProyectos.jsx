import { proyectoService } from "../services/proyectoService.js";
import { useState } from "react";

const ListaProyectos = () => {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [proyectoFormulario, setProyectoFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Activo"
  });

  const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setProyectoFormulario({
      ...proyectoFormulario,
      [name]: value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevoProyecto = {
      id: Date.now(),
      ...proyectoFormulario
    };

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());

    setProyectoFormulario({
      titulo: "",
      categoria: "",
      estado: "Activo"
    });
  };

  const manejarBusqueda = (evento) => {
    const texto = evento.target.value;
    setBusqueda(texto);

    if (texto === "") {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(texto));
    }
  };

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    
    if (busqueda !== "") {
      setProyectos(proyectoService.buscarProyecto(busqueda));
    } else {
      setProyectos(proyectoService.obtenerProyectos());
    }
  };

  return (
    <main>
      
      <div className="novedades buscador-container">
        <h3>Buscador</h3>
        <input
          type="text"
          className="input-buscador"
          placeholder="Buscar proyecto por título..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </div>

      <div className="novedades formulario-container">
        <h3>Registrar Nuevo Proyecto</h3>

        <form className="formulario-proyectos" onSubmit={manejarEnvio}>
          <input
            type="text"
            name="titulo"
            className="input-form"
            placeholder="Título del proyecto"
            value={proyectoFormulario.titulo}
            onChange={manejarCambio}
            required
          />
          
          <input
            type="text"
            name="categoria"
            className="input-form"
            placeholder="Categoría (ej: Robótica)"
            value={proyectoFormulario.categoria}
            onChange={manejarCambio}
            required
          />
          
          <select
            name="estado"
            className="select-form"
            value={proyectoFormulario.estado}
            onChange={manejarCambio}
          >
            <option value="Activo">Activo</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
          </select>

          <button type="submit" className="btn-guardar">
            Guardar Proyecto
          </button>
        </form>
      </div>

      <h2>Proyectos Actuales</h2>
      
      <div className="proyectos-grid">
        {proyectos.length === 0 ? (
          <p>No se encontraron proyectos.</p>
        ) : (
          proyectos.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              <h3>{proyecto.titulo}</h3>
              <p><strong>Categoría:</strong> {proyecto.categoria}</p>
              <p><strong>Estado:</strong> {proyecto.estado}</p>
              
              <button 
                className="btn-eliminar"
                onClick={() => manejarEliminar(proyecto.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>

    </main>
  );
};

export default ListaProyectos;