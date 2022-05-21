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
      <button 
      onClick={mostrar}
      style={{
      backgroundColor: show ? '#FF0000' : '#00ff00', 
      border:'1px solid black', 
      borderRadius: '10px',
      display:'block',
      padding: show ? '10px 20px'  : '5px 10px',
      marginTop:'10px',
      color: show ? 'white' : 'black',
      fontSize: show? '16px' : '12px',
      }}
      >{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && 
        <div>        
          <h1>Conteúdo a ser Mostrado!</h1>
        </div>}
    </div>
  );
}

export default Condicionais;