import React, { ChangeEvent } from "react";
import { useState, useEffect } from 'react';
import { Link } from "../../components/Link"; 

const Useffect: React.FC = () => {

  const[name, setName] = useState('');
  const[lastName, setLastName] = useState('');
  const[fullName, setFullName] = useState('');

  //monitora modificações tanto no name quanto no lastName e atualiza o State de fullName
  useEffect(()=>{
    setFullName(`${name} ${lastName}`)
  }, [name,lastName]);


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setLastName(e.target.value);
  }


  return (
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <h1>USE EFFECT</h1>

      <input type="text" placeholder="Digite seu NOME"  value={name} onChange={handleNameChange}/>
      <input type="text" placeholder="Digite seu SOBRENOME"  value={lastName} onChange={handleLastNameChange}/>
      <p>Nome Completo: {fullName}</p>
    </div>  
   );
}

export default Useffect;