import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        bienvenido al panel principal de gestión de proyectos educativos.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Total de proyectos</Typography>
            <Typography variant="h4">12</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Proyectos en curso</Typography>
            <Typography variant="h4">5</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Dashboard;