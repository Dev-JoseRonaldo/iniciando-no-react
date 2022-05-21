import { useState } from "react";
import { Link } from '../../components/Link';

const Condicionais = () => {
  const [show,setShow] = useState(false);

  function mostrar(){
    setShow(!show);
  }

  return(
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <button onClick={mostrar}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && <div>        
          <h1>Conteúdo a ser Mostrado!</h1>
        </div>}
    </div>
  );
}

export default Condicionais;