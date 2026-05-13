import { proyectoService } from "../services/proyectoService.js";
import { useState } from "react";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  return (
    <main>
      <h2>Proyectos Actuales</h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <h3>{proyecto.titulo}</h3>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;