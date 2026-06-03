import { Typography, Link } from '@mui/material';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-contenedor">
      <div className="footer-contenido">
        
        <div className="footer-seccion-contacto">
          <Typography variant="subtitle1" className="footer-titulo">
            CONTACTO
          </Typography>
          
          <div className="footer-enlaces">
            <Link href="#" underline="hover" className="footer-enlace-item">Correo</Link>
            <Link href="#" underline="hover" className="footer-enlace-item">Teléfono</Link>
            <Link href="#" underline="hover" className="footer-enlace-item">Facebook</Link>
            <Link href="#" underline="hover" className="footer-enlace-item">Instagram</Link>
          </div>
        </div>

        <div className="footer-derechos">
          <Typography variant="body2">
            © {new Date().getFullYear()} Gestión de Proyectos Educativos. All rights reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;