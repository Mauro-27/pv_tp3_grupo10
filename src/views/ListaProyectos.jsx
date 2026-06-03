import { proyectoService } from "../services/proyectoService.js";
import { useState, useEffect, useRef } from "react";
import ProyectoCard from "../components/ProyectoCard.jsx";
import RegistroActividad from "../components/RegistroActividad.jsx";
import FormularioProyecto from "../components/FormularioProyecto.jsx";
import { Container, Typography, TextField, Box, Grid } from "@mui/material";
import '../css/listaProyectos.css';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [ultimaModificacion, setUltimaModificacion] = useState("");

  const primerRender = useRef(true);

  useEffect(() => {

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
    setProyectos(proyectoService.obtenerProyectos());
  };

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container maxWidth="lg" className="lista-contenedor-principal">
      
      {/* Buscador */}
      <Box className="lista-seccion-buscador">
        <Typography variant="h5" gutterBottom color="primary">
          Buscador
        </Typography> 
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar proyecto por título..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </Box>

      {/* Formulario */}
      <Box className="lista-seccion-formulario">
        <FormularioProyecto onAgregarProyecto={manejarAgregarProyecto} />
      </Box>

      {/* Lista de Proyectos */}
      <Typography variant="h4" gutterBottom className="lista-titulo-separador">
        Proyectos Actuales
      </Typography>
      
      <Grid container spacing={3}>
        {proyectosFiltrados.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              No se encontraron proyectos.
            </Typography>
          </Grid>
        ) : (
          proyectosFiltrados.map((proyecto) => (
            <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
              <ProyectoCard
                proyecto={proyecto}
                onEliminar={manejarEliminar}
              />
            </Grid>
          ))
        )}
      </Grid>

      {/* Registro de Actividad */}
      <RegistroActividad fechaUltimaModificacion={ultimaModificacion} />
      
    </Container>
  );
};

export default ListaProyectos;