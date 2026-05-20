import '../css/detalleProyecto.css';

const DetalleProyecto = ({ proyecto }) =>{
    if(!proyecto) return null;

    const {titulo, categoria, estado, descripcion, recursos, equipo} = proyecto;

    const parrafos = descripcion ? descripcion.split('\n') : ["Descripcion no disponible."];

    return(
        <div className="novedades detalle-container">
            <h2>Detalles: {titulo}</h2>
      
            <div className="detalle-badges">
                <span className="badge badge-categoria">{categoria}</span>
                <span className="badge badge-estado">{estado}</span>
            </div>

            <div className="detalle-seccion">
                <h3 className="detalle-subtitulo">Descripción</h3>
                {parrafos.map((parrafo, index) => (
                <p key={index} className="detalle-parrafo">{parrafo}</p>
                ))}
            </div>

            <div className="detalle-seccion">
                <h3 className="detalle-subtitulo">Recursos</h3>
                <ul className="detalle-lista">
                    <li><strong>PDF:</strong> {recursos?.pdf || 'No disponible'}</li>
                    <li><strong>Drive:</strong> {recursos?.drive || 'No disponible'}</li>
                    <li><strong>GitHub:</strong> {recursos?.github || 'No disponible'}</li>
                </ul>
            </div>

            <div>
                <h3 className="detalle-subtitulo">Equipo de Trabajo</h3>
                <ul className="detalle-lista">
                    {equipo ? equipo.map((miembro, index) => (
                    <li key={index}><strong>{miembro.nombre}</strong> - {miembro.rol}</li>
                    )) : <li>Equipo no asignado aún</li>}
                </ul>
            </div>
        </div>
    );
};

export default DetalleProyecto;
