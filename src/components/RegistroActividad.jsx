import React from 'react';

const RegistroActividad = ({ fechaUltimaModificacion }) => {
  return (
    <div className="novedades registro-actividad-container">
      {fechaUltimaModificacion ? (
        <p>Última actualización de la lista: {fechaUltimaModificacion}</p>
      ) : (
        <p>No se han detectado modificaciones en la sesión actual.</p>
      )}
    </div>
  );
};

export default RegistroActividad;