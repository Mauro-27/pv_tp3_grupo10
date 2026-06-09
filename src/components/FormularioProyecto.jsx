import { useState } from "react";
import { TextField, MenuItem, Button, Typography, Paper } from "@mui/material";
import '../css/formulario.css'; 

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
    <Paper elevation={3} className="paper-formulario">
      <form onSubmit={manejarEnvio} className="formulario-layout">
        
        <Typography variant="h6" color="primary" className="titulo-formulario">
          Crear Nuevo Proyecto
        </Typography>

        {/* Sección Básica */}
        <div className="fila-tres-columnas">
          <TextField label="Título del proyecto" name="titulo" value={titulo} onChange={manejarCambio} required />
          <TextField label="Categoría (ej: Robótica)" name="categoria" value={categoria} onChange={manejarCambio} required />
          <TextField select label="Estado" name="estado" value={estado} onChange={manejarCambio}>
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Completado">Completado</MenuItem>
          </TextField>
        </div>

        {/* Descripción */}
        <div className="fila-una-columna">
          <TextField multiline rows={3} label="Descripción detallada del proyecto" name="descripcion" value={descripcion} onChange={manejarCambio} required />
        </div>

        {/* Recursos */}
        <Typography variant="subtitle1" className="titulo-seccion">
          Recursos del Proyecto
        </Typography>
        <div className="fila-tres-columnas">
          <TextField size="small" label="Enlace del PDF" name="pdf" value={recursos.pdf} onChange={manejarCambioRecursos} required />
          <TextField size="small" label="Enlace de Drive" name="drive" value={recursos.drive} onChange={manejarCambioRecursos} required />
          <TextField size="small" label="Enlace de GitHub" name="github" value={recursos.github} onChange={manejarCambioRecursos} required />
        </div>

        {/* Equipo */}
        <Typography variant="subtitle1" className="titulo-seccion">
          Equipo de Trabajo (3 Integrantes obligatorios)
        </Typography>
        <div>
          {[0, 1, 2].map((index) => (
            <div key={index} className="fila-dos-columnas">
              <TextField
                size="small"
                label={`Nombre del integrante ${index + 1}`}
                name="nombre"
                value={equipo[index].nombre}
                onChange={(evento) => manejarCambioEquipo(index, evento)}
                required
              />
              <TextField
                size="small"
                label={`Rol del integrante ${index + 1}`}
                name="rol"
                value={equipo[index].rol}
                onChange={(evento) => manejarCambioEquipo(index, evento)}
                required
              />
            </div>
          ))}
        </div>

        {/* Botón Guardar */}
        <div className="contenedor-boton">
          <Button type="submit" variant="contained" color="success" size="large">
            Guardar Proyecto Completo
          </Button>
        </div>

      </form>
    </Paper>
  );
};

export default FormularioProyecto;