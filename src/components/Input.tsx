import React, { useState } from "react";

export const Input = () => {
  const [name , setName] = useState('Nome');
  const [sobrenome , setSobrenome] = useState('Sobrenome');
  const [idade , setIdade] = useState('Idade');
  

  function mudandoName(event: React.ChangeEvent<HTMLInputElement>){
    setName(event.target.value);
  }

  function mudandoSobrenome(event: React.ChangeEvent<HTMLInputElement>){
    setSobrenome(event.target.value);
  }

  function mudandoIdade(event: React.ChangeEvent<HTMLInputElement>){
    setIdade(event.target.value);
  }
  
  return(
    <div className="input">
      <input type="text"  value={name} onChange={mudandoName}/>
      <input type="text"  value={sobrenome} onChange={mudandoSobrenome}/>
      <input type="text"  value={idade} onChange={mudandoIdade}/>
      <p>Olá {name} {sobrenome},<br /> Você tem {idade} anos.</p>
    </div>
  );
}