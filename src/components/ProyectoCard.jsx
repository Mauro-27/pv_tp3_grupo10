const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="proyecto-card">
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      
      <button 
        className="btn-eliminar"
        onClick={() => onEliminar(id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProyectoCard;