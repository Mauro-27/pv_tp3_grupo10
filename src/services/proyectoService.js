export const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Curso Inicial de HTML", categoria: "Programación", estado: "Activo" },
    { id: 2, titulo: "Huerta Escolar Automatizada", categoria: "Robótica", estado: "Activo" },
    { id: 3, titulo: "Matemática Interactiva", categoria: "Matemática", estado: "Activo" },
    { id: 4, titulo: "Laboratorio Virtual de Ciencias", categoria: "Ciencias", estado: "Activo" },
    { id: 5, titulo: "Biblioteca Digital para la Escuela", categoria: "Educación", estado: "Activo" }
  ];

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
