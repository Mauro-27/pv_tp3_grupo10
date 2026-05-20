import { proyectoService } from "../services/proyectoService.js";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyectos = () => {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [proyectoFormulario, setProyectoFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Activo",
    descripcion: ""
  });

  // Desestructuración en el manejo de los estados del formulario
  const { titulo, categoria, estado, descripcion } = proyectoFormulario;

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
      estado: "Activo",
      descripcion: ""
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

  const manejarVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
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
            value={titulo}
            onChange={manejarCambio}
            required
          />
          
          <input
            type="text"
            name="categoria"
            className="input-form"
            placeholder="Categoría (ej: Robótica)"
            value={categoria}
            onChange={manejarCambio}
            required
          />

          <input
            type="text"
            name="descripcion"
            className="input-form"
            placeholder="Descripción detallada del proyecto..."
            value={descripcion}
            onChange={manejarCambio}
            required
            rows="3"
            style={{ resize: 'vertical' }}
          />
          
          <select
            name="estado"
            className="select-form"
            value={estado}
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



      {proyectoSeleccionado && (
        <DetalleProyecto proyecto={proyectoSeleccionado} />
      )}

      <h2>Proyectos Actuales</h2>
      
      <div className="proyectos-grid">
        {proyectos.length === 0 ? (
          <p>No se encontraron proyectos.</p>
        ) : (
          proyectos.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              onEliminar={manejarEliminar}
              onVerDetalle={manejarVerDetalle}
            />
          ))
        )}
      </div>

    </main>
  );
};

export default ListaProyectos;