import { Container, Typography, Box, Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { proyectoService } from '../services/proyectoService.js'; 
import '../css/dashboard.css';
import '../css/login.css'; 

const Dashboard = () => {
  const proyectos = proyectoService.obtenerProyectos();

  const totalProyectos = proyectos.length;
  
  const proyectosEnCurso = proyectos.filter(
    (proyecto) => proyecto.estado === "Activo"
  ).length;

  return (
    <Container maxWidth="lg" className="dashboard-contenedor">
      
      <Grid container spacing={6} sx={{alignItems: "center"}}>
        
        {/* COLUMNA IZQUIERDA: DASHBOARD */}
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

        {/* COLUMNA DERECHA: LOGIN */}
        <Grid xs={12} md={6}>
          <Card className="login-tarjeta" elevation={3}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{fontWeight: "600", textAlign: "center"}}>
                Iniciar Sesión
              </Typography>
              
              <Box component="form" className="login-formulario">
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                />
                
                <TextField
                  fullWidth
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  required
                />
                
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