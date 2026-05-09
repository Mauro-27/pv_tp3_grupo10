const usuarioService = (() =>{
    //Array de Usuarios
    const usuario = [
        {id:1, nombre:"Mauro", apellido:"Campos", estado: true},
        {id:2, nombre:"Gabriel", apellido:"Chauque", estado: true},
        {id:3, nombre:"Lucas", apellido:"Barrientos", estado: true},
        {id:4, nombre:"Erika", apellido:"Rocha", estado: true},
        {id:5, nombre:"Alex", apellido:"Robles", estado: true}
    ];

    const listarTodosUsuarios = () => {
        return [...usuario];
    };

    return{
        listarTodosUsuarios
    }


})();

export default usuarioService;