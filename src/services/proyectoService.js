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
        { nombre: "Prof. Alberto Ruiz", rol: "Coordinador de Proyecto" },
        { nombre: "Alexander", rol: "Desarrollador IoT y Hardware" },
        { nombre: "Sofía Medina", rol: "Especialista en Botánica" }
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
        { nombre: "Valentina Gómez", rol: "Profesora Titular de Matemática" },
        { nombre: "Marcos Toledo", rol: "Diseñador UX/UI" },
        { nombre: "Julieta Paz", rol: "Programadora Frontend" }
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
        { nombre: "Dra. Elena Costa", rol: "Coordinadora Científica" },
        { nombre: "Martín López", rol: "Programador de Físicas" },
        { nombre: "Lucía Fernández", rol: "Animadora 3D" }
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
        { nombre: "Carla Rivas", rol: "Bibliotecaria Titular" },
        { nombre: "Alexander", rol: "Administrador de Base de Datos" },
        { nombre: "Tomás Herrera", rol: "Desarrollador Backend" }
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

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();
