import "./App.css";
import logoCarla from "./images/LogoAzulClaro.png";
import Boton from "./components/Boton/Boton";
import Counter from "./components/Counter/Counter";
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);
 
  const handleClickAumentar = () => {
    setNumClicks(numClicks + 1);
  }
  const handleClickDisminuir = () => {
    numClicks > 0 ? setNumClicks( numClicks - 1) : setNumClicks(0)

  }
  const resetCounter = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
          src={logoCarla} 
          alt="carla" 
          className="logoCarla" />
      </div>
      <div className="contenedor-principal" >
        <Counter
          cantidadClicks={numClicks}
        />
        <Boton
          texto="Aumentar"
          buttonClick={true}
          handleClick={handleClickAumentar}
        />
        <Boton
          texto="Disminuir"
          buttonClick={true}
          handleClick={handleClickDisminuir}
        />
          <Boton
          texto="Reset"
          buttonClick={false}
          handleClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
