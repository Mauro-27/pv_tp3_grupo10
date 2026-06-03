import { Container, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const PerfilUsuario = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Perfil de Usuario
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary="Mauro Campos" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Rol" secondary="Docente / Administrador" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Institución" secondary="Escuela Técnica N°1" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;