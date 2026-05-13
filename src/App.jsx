import Footer from "./components/Footer";
import ListaProyectos from './components/ListaProyectos.jsx'
import Header from './components/Header';
import Nav from './components/Nav';
import './css/App.css';

function App() {

  return (
    <div className="app-container">
      <Header />
      <Nav />
      <ListaProyectos />
      <Footer />
    </div>
  );
}

export default App
