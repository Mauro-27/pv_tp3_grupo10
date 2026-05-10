export const proyectoService = (() =>{
    let proyectos = [
        {id:1, titulo:"Curso Inicial de HTML", categoria:"Programación", estado: true},
        {id:2, titulo:"Huerta Escolar Automatizada", categoria:"Robótica", estado: true},
        {id:3, titulo:"Matemática Interactiva", categoria:"Matemática", estado: true},
        {id:4, titulo:"Laboratorio Virtual de Ciencias", categoria:"Ciencias", estado: true},
        {id:5, titulo:"Biblioteca Digital para la Escuela", categoria:"Educación", estado: true}
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

       const agregarProyectos = () => {
        proyectos.push(nuevoProyecto)
    };

       const eliminarProyectos = (id) => {
        proyectos = proyectos.filter(proyectos => proyectos.id !== id);
    };

       const buscarProyectos = (texto) => {
            proyectos.titulo.toLowCase().include(texto.toLowCase())
    };

    return{
        obtenerProyectos,
        agregarProyectos,
        eliminarProyectos,
        buscarProyectos
    }
})();
