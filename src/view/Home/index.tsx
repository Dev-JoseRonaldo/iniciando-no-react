import React from "react";

import { useState } from 'react';
import { Header } from "../../components/Header"; 
import { Figure } from "../../components/Figure";
import { Contador } from "../../components/Contador"; 
import { Input } from "../../components/Input"; 
import { Link } from '../../components/Link';

const Home: React.FC = () => {

  return (
    <div>
      
      <Link url='http://localhost:3000/contato' texto='Contato'/>
      <Link url='http://localhost:3000/lista' texto='Listas'/>
      <Link url='http://localhost:3000/condicionais' texto='Condicionais'/>

      <Header 
      nome="José" 
      sobrenome="Ronaldo" 
      idade={23} 
      tecnologia="ReactJS"
      />
 
      <Figure 
      src='https://blog.rocketseat.com.br/content/images/size/w1000/2020/06/autenticacao-no-react-native-reactjs-com-context-api-hooks.png' 
      alt='imagem do ReactJS'
      description='Imagem representativa do ReactJS'
      />
 
      <Contador/>
      <hr />
 
      <Input />
      <hr />
     </div>
   );
}

export default Home;