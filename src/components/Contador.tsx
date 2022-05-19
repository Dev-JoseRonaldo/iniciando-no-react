import { useState } from "react";
import { Button } from "./Button";

export const Contador = () => {
  const [numero, setNumero] = useState(0);

  function adicionar(){
    setNumero(numero + 1);
  }

  function subtrair(){
    setNumero(numero - 1);
  }

  return(
    <>
      <Button funcao={adicionar} text='+'/>
      <h2>{numero}</h2>
      <Button funcao={subtrair} text='-'/>
    </>
  );
}