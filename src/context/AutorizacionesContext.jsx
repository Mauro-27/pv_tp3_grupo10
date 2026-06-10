import { createContext, useContext, useState } from 'react';

export const AutorizacionesContext = createContext(null);

export const ProveedorAutorizaciones = ({ children }) => {
    
    const usuarioGuardado = localStorage.getItem('usuario_sesion');
    
    const estadoInicial = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

    const [usuarioActivo, setUsuarioActivo] = useState(estadoInicial);

    const guardarSesion = (usuario) => {
        setUsuarioActivo(usuario);
        localStorage.setItem('usuario_sesion', JSON.stringify(usuario));
    };

    const cerrarSesion = () => {
        setUsuarioActivo(null);
        localStorage.removeItem('usuario_sesion');
    };

    return (
        <AutorizacionesContext.Provider value={{ usuarioActivo, guardarSesion, cerrarSesion }}>
            {children}
        </AutorizacionesContext.Provider>
    );
};

export const useAutorizaciones = () => {
    return useContext(AutorizacionesContext);
};