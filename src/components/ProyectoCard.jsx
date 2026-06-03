import { useNavigate } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;
  const navigate = useNavigate();

  return (
    <div className="proyecto-card">
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      
      <div className="opcionesCard">
      <button 
          className="btn-detalle"
          onClick={() => navigate(`/proyectos/${id}`)}
        >
          Ver Detalle
        </button>
        <button 
          className="btn-eliminar"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProyectoCard;