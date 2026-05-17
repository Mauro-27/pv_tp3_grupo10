export const proyectoService = (() => {
  let proyectos = [
    {
      id:1,
      titulo:"Curso Inicial de HTML",
      categoria: "Programacion",
      estado:"Activo",
      descripcion:"En este proyecto se busca que los estudiantes aprendan conceptos basicos de HTML5",
      recursos:{
        pdf: "Apuntes_Basicos_de_HTML5.pdf",
        drive:"Materiales_HTML5",
        github:"https://github.com/Proyecto-Inicial/html-inicial"
      },
      equipo:[
        {nombre:"Campos Mauro",rol:"Maestro de Teoria Titular",},
        {nombre:"Lucas Barrientos",rol:"Ayudante de Practica"},
        {nombre:"Gabriel Chauque",rol:"Segunda Ayudante de Practica"},
        {nombre:"Rocha Erika",rol:"Maestra de Practica Titular"}
      ]
    },
    { id: 2, titulo: "Huerta Escolar Automatizada", categoria: "Robótica", estado: "Activo" },
    { id: 3, titulo: "Matemática Interactiva", categoria: "Matemática", estado: "Activo" },
    { id: 4, titulo: "Laboratorio Virtual de Ciencias", categoria: "Ciencias", estado: "Activo" },
    { id: 5, titulo: "Biblioteca Digital para la Escuela", categoria: "Educación", estado: "Activo" }
  ]

  const obtenerProyectos = () => {
    return [...proyectos];
  };

  const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();
