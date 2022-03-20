import React, {useEffect, useState} from "react"; //Importacion de funciones de react
import logo from './logo.svg'; // Importacion de logo
import {Boton} from "./components/Boton"
import './App.css'; // Importacion de hoja de estilo
import image from "../src" //Importacion de imagen

function App() {
  // * JSX JAVASCRIPT en HTML, permite trabajar con js dentro de etiquetas HTML
  // ! Class es una palabra reservada de Javascript y en react se utiliza className
  // ? HOOKS son funciones que vienen con React, ya estan hechos y hay que importarlos ejem (useEffect, useState)
  // * useState - Es un Array con parametros
  // ! useEffect

  const [contador, setContador] =useState(0);
  const [nombre, setNombre] = useState("");
  useEffect(()=>{
    setContador(150);// ejecuta esto si cambian las variables
  }, [nombre]);// variables del array
  return (
    <div className="App" id="App">
      <div>El valor de mi contador es {contador}</div>
        <button onClick={() =>{
          setContador(contador + 1);
        }}>Aumentar contador
        </button>

        <button
        color= "primary"
        variant= "contained"
        onClick={() =>{
          setContador(contador - 1);
        }}>Disminuir contador
        </button>

        <button onClick={() =>{
          setContador(0);
        }}>Regresar a cero0000000
        </button>

        <input value= {nombre}
        onChange= {(event) => {
          setNombre(event.target.value);
        }}
        placeholder="Ingresa tu nombre"
        />
        <span>Mi nombre es {nombre} </span>
        <Boton />

    </div>
  );
}

export default App;
