import React, { useState } from "react";

export const Input = () => {
  const [name , setName] = useState('');

  function mudandoName(event: React.ChangeEvent<HTMLInputElement>){
    setName(event?.target.value);
  }
  return(
    <div className="input">
      <input type="text"  value={name} onChange={mudandoName}/>
      <p>Seu nome é: {name}</p>
    </div>
  );
}