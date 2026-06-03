import React from 'react';
import { Alert } from '@mui/material';

const RegistroActividad = ({ fechaUltimaModificacion }) => {
  if (!fechaUltimaModificacion) return null;

  return (
    <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
      Última actualización de la lista: {fechaUltimaModificacion}
    </Alert>
  );
};

export default RegistroActividad;