import { useState } from 'react';
import { Header } from './components/Header';
import { Figure } from './components/Figure';
import { Contador } from './components/Contador';

function App() {
  return (
   <div>
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
    </div>
  )
}

export default App;
