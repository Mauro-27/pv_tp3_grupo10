import { proyectoService } from "../services/proyectoService.js";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  return (
    <main>
      <h2>Proyectos Actuales</h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <ProyectoCard
  key={proyecto.id}
  proyecto={proyecto}
  onVerDetalle={(proyecto) => {
    console.log(proyecto);
  }}
  onEliminar={(id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  }}
/>
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;