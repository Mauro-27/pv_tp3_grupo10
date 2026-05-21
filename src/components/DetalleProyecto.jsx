import '../css/detalleProyecto.css';

const DetalleProyecto = ({ proyecto }) =>{
    if(!proyecto) return null;

    const {titulo, categoria, estado, descripcion, recursos, equipo} = proyecto;

    const parrafos = descripcion.split('\n');

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
                    <li><strong>PDF:</strong> {recursos.pdf}</li>
                    <li><strong>Drive:</strong> {recursos.drive}</li>
                    <li><strong>GitHub:</strong> {recursos.github}</li>
                </ul>
            </div>

            <div>
                <h3 className="detalle-subtitulo">Equipo de Trabajo</h3>
                <ul className="detalle-lista">
                    {equipo.map((miembro, index) => (
                    <li key={index}><strong>{miembro.nombre}</strong> - {miembro.rol}</li>
                    ))} 
                </ul>
            </div>
        </div>
    );
};

export default DetalleProyecto;
