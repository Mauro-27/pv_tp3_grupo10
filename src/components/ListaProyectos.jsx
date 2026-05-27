import { proyectoService } from "../services/proyectoService.js";
import { useState, useEffect, useRef } from "react";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";


const ListaProyectos = () => {

  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [ultimaModificacion, setUltimaModificacion] = useState("");

  // bandera para no ejecutar en el primer render
  const primerRender = useRef(true);

  useEffect(() => {
    // cortamos aca si es la primera vez que carga la pagina
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }

    const ahora = new Date();
    const cambiarFecha = ahora.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const cambiarHora = ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    const horaFormateada = `${cambiarFecha} a las ${cambiarHora} hs.`;
    
    setUltimaModificacion(horaFormateada);
  }, [proyectos]);

  const manejarAgregarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const manejarBusqueda = (evento) => {
    const texto = evento.target.value;
    setBusqueda(texto);
  };

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    
    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
        setProyectoSeleccionado(null);
    }
    setProyectos(proyectoService.obtenerProyectos());
  };

  const manejarVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

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
        <FormularioProyecto onAgregarProyecto={manejarAgregarProyecto} />
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
        {proyectosFiltrados.length === 0 ? (
          <p>No se encontraron proyectos.</p>
        ) : (
          proyectosFiltrados.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              onEliminar={manejarEliminar}
              onVerDetalle={manejarVerDetalle}
            />
          ))
        )}
      </div>

      <RegistroActividad fechaUltimaModificacion={ultimaModificacion} />

    </main>
  );
};

export default ListaProyectos;