import { useState } from "react";

const FormularioProyecto = ({ onAgregarProyecto }) => {
  
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

  // mudamos todas las funciones de manejarCambio
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setProyectoFormulario({ ...proyectoFormulario, [name]: value });
  };

  const manejarCambioRecursos = (evento) => {
    const { name, value } = evento.target;
    setProyectoFormulario({
      ...proyectoFormulario,
      recursos: { ...proyectoFormulario.recursos, [name]: value }
    });
  };

  const manejarCambioEquipo = (index, evento) => {
    const { name, value } = evento.target;
    const nuevoEquipo = [...proyectoFormulario.equipo];
    nuevoEquipo[index] = { ...nuevoEquipo[index], [name]: value };
    setProyectoFormulario({ ...proyectoFormulario, equipo: nuevoEquipo });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevoProyecto = { id: Date.now(), ...proyectoFormulario };

    onAgregarProyecto(nuevoProyecto);

    setProyectoFormulario({
      titulo: "", categoria: "", estado: "Activo", descripcion: "",
      recursos: { pdf: "", drive: "", github: "" },
      equipo: [{ nombre: "", rol: "" }, { nombre: "", rol: "" }, { nombre: "", rol: "" }]
    });
  };

  return (
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
  );
};

export default FormularioProyecto;