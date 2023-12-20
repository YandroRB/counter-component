import { Fragment, useState } from 'react';
import './App.css'
function App(){
  /*
  useState es un hook de React que se utiliza para agregar estado a los componentes funcionales. Antes de la introducción de hooks en React, los componentes funcionales eran limitados en cuanto a su capacidad para manejar y mantener el estado interno. useState resuelve este problema permitiendo que los componentes funcionales tengan su propio estado.

  La función useState devuelve un array con dos elementos. El primer elemento es el valor actual del estado, y el segundo elemento es una función que se utiliza para actualizar ese estado.
  */
  const [count,setCount]=useState(0);
  const handdleAdd=()=>{if(count<99)setCount(count+1)},
  handdleMinus=()=>{if(count>0) setCount(count-1)},
  handdleReset=()=>setCount(0);
  return (
  /*
  En React, un "fragment" es una característica que permite agrupar múltiples elementos hijos sin agregar un nodo adicional al DOM. Puedes pensar en un fragmento como un contenedor ligero que no crea un elemento adicional en la salida final. Esto es útil cuando necesitas devolver varios elementos desde un componente sin introducir un elemento contenedor adicional.
  */
    <div className="container">
      <h2 className="title">Counter</h2>
      <div className="number">{count}</div>
      <Fragment>
      <button onClick={handdleAdd} className="buttons plus">+</button>
      <button onClick={handdleMinus} className="buttons minus">-</button>
      <button onClick={handdleReset} className="buttons reset">Reset</button>
      </Fragment>

    </div>
  );
}

export default App
