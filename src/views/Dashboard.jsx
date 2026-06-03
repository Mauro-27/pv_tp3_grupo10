import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import '../css/dashboard.css';

const Dashboard = () => {
  return (
    <Container maxWidth="md" className="dashboard-contenedor">
      
      <Typography variant="h4" component="h2" gutterBottom>
        Dashboard
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        Bienvenido al panel principal de gestión de proyectos educativos.
      </Typography>
      
      <Box className="dashboard-tarjetas-caja">
        
        <Card className="dashboard-tarjeta">
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total de proyectos
            </Typography>
            <Typography variant="h4">12</Typography>
          </CardContent>
        </Card>
        
        <Card className="dashboard-tarjeta">
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Proyectos en curso
            </Typography>
            <Typography variant="h4">5</Typography>
          </CardContent>
        </Card>

      </Box>

    </Container>
  );
};

export default Dashboard;