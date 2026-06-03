import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import '../css/proyectoCard.css';

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;
  const navigate = useNavigate();

  return (
    <Card className="tarjeta-proyecto" elevation={3}>
      
      <CardContent className="tarjeta-contenido-principal">
        <Typography variant="h5" component="div" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Categoría:</strong> {categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Estado:</strong> {estado}
        </Typography>
      </CardContent>
      
      <CardActions className="tarjeta-acciones">
        <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          onClick={() => navigate(`/proyectos/${id}`)}
        >
          Ver Detalle
        </Button>
        <Button 
          size="small" 
          variant="outlined" 
          color="error" 
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </Button>
      </CardActions>
      
    </Card>
  );
};

export default ProyectoCard;