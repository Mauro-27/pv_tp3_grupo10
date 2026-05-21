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
    descripcion: "",
    recursos: { pdf: "", drive: "", github: "" },
    equipo: [
      { nombre: "", rol: "" },
      { nombre: "", rol: "" }, 
      { nombre: "", rol: "" } 
    ]
  });

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyectoFormulario;
  const [busqueda, setBusqueda] = useState("");


  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setProyectoFormulario({
      ...proyectoFormulario,
      [name]: value
    });
  };


  const manejarCambioRecursos = (evento) => {
    const { name, value } = evento.target;
    setProyectoFormulario({
      ...proyectoFormulario,
      recursos: {
        ...proyectoFormulario.recursos,
        [name]: value
      }
    });
  };


  const manejarCambioEquipo = (index, evento) => {
    const { name, value } = evento.target;
    const nuevoEquipo = [...proyectoFormulario.equipo];
    nuevoEquipo[index] = { ...nuevoEquipo[index], [name]: value };
    
    setProyectoFormulario({
      ...proyectoFormulario,
      equipo: nuevoEquipo
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
      descripcion: "",
      recursos: { pdf: "", drive: "", github: "" },
      equipo: [
        { nombre: "", rol: "" },
        { nombre: "", rol: "" },
        { nombre: "", rol: "" }
      ]
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
    
    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
        setProyectoSeleccionado(null);
    }

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
          
          <div className="form-seccion-basica">
              <input type="text" name="titulo" className="input-form" placeholder="Título del proyecto" value={titulo} onChange={manejarCambio} required />
              <input type="text" name="categoria" className="input-form" placeholder="Categoría (ej: Robótica)" value={categoria} onChange={manejarCambio} required />
              <select name="estado" className="select-form" value={estado} onChange={manejarCambio}>
                <option value="Activo">Activo</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
              </select>
          </div>

          <textarea name="descripcion" className="input-form textarea-descripcion" placeholder="Descripción detallada del proyecto..." value={descripcion} onChange={manejarCambio} required rows="3" />
          
          <div className="form-seccion-extra">
            <h4>Recursos del Proyecto</h4>
            <div className="inputs-fila">
                <input type="text" name="pdf" className="input-form" placeholder="Enlace del PDF" value={recursos.pdf} onChange={manejarCambioRecursos} required />
                <input type="text" name="drive" className="input-form" placeholder="Enlace de Drive" value={recursos.drive} onChange={manejarCambioRecursos} required />
                <input type="text" name="github" className="input-form" placeholder="Enlace de GitHub" value={recursos.github} onChange={manejarCambioRecursos} required />
            </div>
          </div>

          <div className="form-seccion-extra">
            <h4>Equipo de Trabajo (3 Integrantes obligatorios)</h4>
            
            {[0, 1, 2].map((index) => (
              <div className="inputs-fila" key={index}>
                <input 
                  type="text" 
                  name="nombre" 
                  className="input-form" 
                  placeholder={`Nombre del integrante ${index + 1}`} 
                  value={equipo[index].nombre} 
                  onChange={(evento) => manejarCambioEquipo(index, evento)} 
                  required 
                />
                <input 
                  type="text" 
                  name="rol" 
                  className="input-form" 
                  placeholder={`Rol del integrante ${index + 1}`} 
                  value={equipo[index].rol} 
                  onChange={(evento) => manejarCambioEquipo(index, evento)} 
                  required 
                />
              </div>
            ))}
          </div>

          <button type="submit" className="btn-guardar btn-finalizar">
            Guardar Proyecto Completo
          </button>
        </form>
      </div>

      {proyectoSeleccionado && (
        <div className="detalle-wrapper">
          <DetalleProyecto proyecto={proyectoSeleccionado} />
          <button onClick={() => setProyectoSeleccionado(null)} className="btn-eliminar btn-cerrar-detalle">
              Cerrar Detalle
          </button>
        </div>
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