const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle}) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="proyecto-card">
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      
      <div className="opcionesCard">
      <button 
          className="btn-detalle"
          onClick={() => onVerDetalle(proyecto)}
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