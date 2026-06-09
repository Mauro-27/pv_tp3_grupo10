import { AutorizacionesContext } from '../context/AutorizacionesContext';
import { useContext } from 'react';

// custom hook para consumir el contexto
export const useAutorizaciones = () => useContext(AutorizacionesContext);