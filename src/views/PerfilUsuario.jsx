import { Container, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import '../css/perfilUsuario.css';

const PerfilUsuario = () => {
  return (
    <Container maxWidth="sm" className="perfil-contenedor">
      <Paper elevation={3} className="perfil-paper">
        
        <Typography variant="h5" component="h2" gutterBottom>
          Perfil de Usuario
        </Typography>
        
        <Divider className="perfil-divisor" />
        
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