import { Container, Typography, Box, Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { proyectoService } from '../services/proyectoService.js'; 
import { useAutorizaciones } from '../context/AutorizacionesContext';
import autorizacionesService from '../services/autorizacionesService';
import '../css/dashboard.css';
import '../css/login.css'; 

const Dashboard = () => {
  const proyectos = proyectoService.obtenerProyectos();

  const totalProyectos = proyectos.length;
  
  const proyectosEnCurso = proyectos.filter(
    (proyecto) => proyecto.estado === "Activo"
  ).length;

  const { guardarSesion } = useAutorizaciones();
  const navigate = useNavigate();
  
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejarLogin = async (e) => {
    // se evita que la pagina recargue al enviar
    e.preventDefault();
    setError('');
    try {
      // enviamos usuario y clave al servicio de autenticacion
      const data = await autorizacionesService.login(usuario, password);
      // si es correcto guardamos la sesion en el contexto global
      guardarSesion(data);
      // mandamos al usuario a ver los proyectos si todo ok
      navigate('/proyectos'); 
    } catch (err) {
      // capturamos el error si las credenciales son invalidas
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="lg" className="dashboard-contenedor">
      
      <Grid container spacing={6} sx={{alignItems: "center"}}>
        
        {/* seccion izquierda con estadisticas */}
        <Grid xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="600" color="primary">
             Dashboard
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Bienvenido al panel principal de gestión de proyectos educativos.
          </Typography>
          
          <Box className="dashboard-tarjetas-caja">
            <Card className="dashboard-tarjeta" elevation={2}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Total de proyectos
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {totalProyectos}
                </Typography>
              </CardContent>
            </Card>
            
            <Card className="dashboard-tarjeta" elevation={2}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Proyectos en curso
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {proyectosEnCurso}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* seccion derecha con formulario de ingreso */}
        <Grid xs={12} md={6}>
          <Card className="login-tarjeta" elevation={3}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{fontWeight: "600", textAlign: "center"}}>
                Iniciar Sesión
              </Typography>
              
              <Box component="form" className="login-formulario" onSubmit={manejarLogin}>
                <TextField
                  fullWidth
                  label="Usuario"
                  variant="outlined"
                  margin="normal"
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                
                <TextField
                  fullWidth
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                {error && (
                  <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                    {error}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 3, mb: 1, py: 1.5, borderRadius: 2 }}
                >
                  Ingresar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Dashboard;