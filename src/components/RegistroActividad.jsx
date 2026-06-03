import React from 'react';

const RegistroActividad = ({ fechaUltimaModificacion }) => {
  // si no hay fecha todavia no se renderiza nada
  if (!fechaUltimaModificacion) return null;

  return (
    <div className="novedades registro-actividad-container">
      <p>Última actualización de la lista: {fechaUltimaModificacion}</p>
    </div>
  );
};

export default RegistroActividad;