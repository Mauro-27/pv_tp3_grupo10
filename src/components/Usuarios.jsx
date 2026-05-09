import usuarioService from "../services/proyectoService";

const Usuarios = () => {
    const usuariosLocales = usuarioService.listarTodosUsuarios();
    console.log(usuarioService.listarTodosUsuarios());

    return (
        <>
            <p>HOLA REACT</p>
        </>
    ) 
}

export default Usuarios;