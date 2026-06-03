import { useParams, useNavigate } from 'react-router-dom';
import { proyectoService } from '../services/proyectoService.js';
import '../css/detalleProyecto.css';

const DetalleProyecto = () => {
    // capturamos el id de la url y buscamos en el service
    const { id } = useParams();
    const navigate = useNavigate();
    const proyecto = proyectoService.obtenerProyectoPorId(id);

    if(!proyecto) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>proyecto no encontrado x_x</h2>;

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

            {/* metemos el boton de volver aca adentro ya que ahora es una pagina aparte */}
            <button onClick={() => navigate('/proyectos')} className="btn-eliminar btn-cerrar-detalle" style={{ marginTop: '20px' }}>
                Volver a Proyectos
            </button>
        </div>
    );
};

export default DetalleProyecto;
