import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, Chip, Divider, Button, List, ListItem, ListItemText } from '@mui/material';
import { proyectoService } from '../services/proyectoService.js'; 
import '../css/detalleProyecto.css'; 

const DetalleProyecto = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const proyecto = proyectoService.obtenerProyectoPorId(id);

    if(!proyecto) return (
        <Typography variant="h4" textAlign="center" color="error" mt={5}>
            Proyecto no encontrado x_x
        </Typography>
    );

    const {titulo, categoria, estado, descripcion, recursos, equipo} = proyecto;
    const parrafos = descripcion.split('\n');

    return(
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} className="detalle-paper">
                
                <Typography variant="h3" component="h2" color="primary" className="detalle-titulo">
                    {titulo}
                </Typography>
                
                <Box className="detalle-badges">
                    <Chip label={categoria} color="secondary" />
                    <Chip 
                        label={estado} 
                        color={estado === 'Completado' ? 'success' : 'primary'} 
                        variant={estado === 'Activo' ? 'filled' : 'outlined'} 
                    />
                </Box>

                <Divider className="detalle-divisor" />

                <Box className="detalle-seccion">
                    <Typography variant="h5" className="detalle-subtitulo">
                        Descripción
                    </Typography>
                    {parrafos.map((parrafo, index) => (
                        <Typography key={index} variant="body1" paragraph color="text.secondary">
                            {parrafo}
                        </Typography>
                    ))}
                </Box>

                <Box className="detalle-seccion">
                    <Typography variant="h5" className="detalle-subtitulo">
                        Recursos
                    </Typography>
                    <List dense>
                        <ListItem disablePadding className="detalle-item-lista">
                            <ListItemText primary={<strong>PDF:</strong>} secondary={recursos.pdf} />
                        </ListItem>
                        <ListItem disablePadding className="detalle-item-lista">
                            <ListItemText primary={<strong>Drive:</strong>} secondary={recursos.drive} />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary={<strong>GitHub:</strong>} secondary={recursos.github} />
                        </ListItem>
                    </List>
                </Box>

                <Box className="detalle-seccion">
                    <Typography variant="h5" className="detalle-subtitulo">
                        Equipo de Trabajo
                    </Typography>
                    <List dense>
                        {equipo.map((miembro, index) => (
                            <ListItem key={index} disablePadding className="detalle-item-lista">
                                <ListItemText 
                                    primary={miembro.nombre} 
                                    secondary={miembro.rol} 
                                    primaryTypographyProps={{ fontWeight: 'medium' }}
                                />
                            </ListItem>
                        ))} 
                    </List>
                </Box>

                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={() => navigate('/proyectos')} 
                    className="detalle-boton-volver"
                >
                    Volver a Proyectos
                </Button>
                
            </Paper>
        </Container>
    );
};

export default DetalleProyecto;
