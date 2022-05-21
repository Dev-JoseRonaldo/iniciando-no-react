import { useState } from "react";

const Condicionais = () => {
  const [show,setShow] = useState(false);

  function mostrar(){
    setShow(!show);
  }

  return(
    <div>
      <button onClick={mostrar}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && <div>        
          <h1>Conteúdo a ser Mostrado!</h1>
        </div>}
    </div>
  );
}

export default Condicionais;