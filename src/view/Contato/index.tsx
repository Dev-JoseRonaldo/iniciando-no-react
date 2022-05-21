import React from "react";
import { Link } from '../../components/Link';
import { Figure } from "../../components/Figure/Figure";

const Contato: React.FC = () => {

  return(
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <h1>Contato</h1>
      <Figure 
      src='https://agroemil.com.br/wp-content/uploads/2021/09/banner-contato.jpeg' 
      alt='imagem do ReactJS'
      description='Imagem representativa do Contato'
      />
    </div>
  );
}

export default Contato;