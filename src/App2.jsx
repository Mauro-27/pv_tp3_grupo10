import Usuarios from "./components/Usuarios";


const App2 = () =>{
    //JS
    console.log("Hola React");
    let nombre = "Mauro Campos";

    //HTML
    return (
        <div>
            <h1>{nombre}</h1>
            <Usuarios />
        </div>
    )
} 

export default App2;