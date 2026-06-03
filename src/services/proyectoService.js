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
        {nombre:"Mauro Campos",rol:"Maestro de Teoria Titular",},
        {nombre:"Lucas Barrientos",rol:"Ayudante de Practica"},
        {nombre:"Gabriel Chauque",rol:"Segunda Ayudante de Practica"},
      ]
    },
    {
      id: 2,
      titulo: "Huerta Escolar Automatizada",
      categoria: "Robótica",
      estado: "Activo",
      descripcion: "Desarrollo de un sistema de riego y monitoreo automático para la huerta de la escuela usando placas Arduino y sensores de humedad.\nEl objetivo es promover el cuidado del medio ambiente integrando la tecnología en el proceso.",
      recursos: {
        pdf: "Manual_Sensores_Arduino.pdf",
        drive: "Esquemas_Huerta_Auto",
        github: "https://github.com/escuela/huerta-robotica"
      },
      equipo: [
        { nombre: "Mauro Campos", rol: "Coordinador de Proyecto" },
        { nombre: "Gabriel Chauque", rol: "Desarrollador IoT y Hardware" },
        { nombre: "Erika Rocha", rol: "Especialista en Botánica" }
      ]
    },
    {
      id: 3,
      titulo: "Matemática Interactiva",
      categoria: "Matemática",
      estado: "Activo",
      descripcion: "Creación de una plataforma web con minijuegos y ejercicios visuales para enseñar álgebra y teoría de conjuntos.\nSe busca que los alumnos de secundaria practiquen los conceptos de forma lúdica e intuitiva.",
      recursos: {
        pdf: "Ejercicios_Algebra_Interactiva.pdf",
        drive: "Recursos_Graficos_Matematica",
        github: "https://github.com/escuela/mate-interactiva"
      },
      equipo: [
        { nombre: "Lucas Barrientos", rol: "Profesora Titular de Matemática" },
        { nombre: "Mauro Campos", rol: "Diseñador UX/UI" },
        { nombre: "Gabriel Chauque", rol: "Programadora Frontend" }
      ]
    },
    {
      id: 4,
      titulo: "Laboratorio Virtual de Ciencias",
      categoria: "Ciencias",
      estado: "Activo",
      descripcion: "Simulador interactivo para realizar experimentos de química y física de forma segura desde la computadora.\nPermite mezclar sustancias virtuales y visualizar las reacciones simuladas en tiempo real sin riesgos físicos.",
      recursos: {
        pdf: "Guia_Experimentos_Quimica.pdf",
        drive: "Modelos_3D_Laboratorio",
        github: "https://github.com/escuela/lab-virtual"
      },
      equipo: [
        { nombre: "Lucas Barrientos", rol: "Coordinadora Científica" },
        { nombre: "Erika Rocha", rol: "Programador de Físicas" },
        { nombre: "Gabriel Chauque", rol: "Animadora 3D" }
      ]
    },
    {
      id: 5,
      titulo: "Biblioteca Digital para la Escuela",
      categoria: "Educación",
      estado: "Activo",
      descripcion: "Sistema web para la gestión y consulta de libros digitales (PDF y ePub) dirigido a los alumnos de la institución.\nIncluye un buscador integrado avanzado por título, autor y categoría con sistema de reservas.",
      recursos: {
        pdf: "Manual_Usuario_Biblioteca.pdf",
        drive: "Base_Datos_Libros",
        github: "https://github.com/escuela/biblioteca-digital"
      },
      equipo: [
        { nombre: "Gabriel Chauque", rol: "Bibliotecaria Titular" },
        { nombre: "Lucas Barrientos", rol: "Administrador de Base de Datos" },
        { nombre: "Mauro Campos", rol: "Desarrollador Backend" }
      ]
    }
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

  // agregamos esto para que el router pueda buscar el proyecto por id
  const obtenerProyectoPorId = (id) => {
    return proyectos.find((proyecto) => proyecto.id === parseInt(id));
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
    obtenerProyectoPorId
  };
})();
