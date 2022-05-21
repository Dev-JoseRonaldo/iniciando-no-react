import { useState } from "react";
import { Button } from "../Button";

import styles from '../../components/Contador/styles.module.css';

export const Contador = () => {
  const [numero, setNumero] = useState(0);

  function adicionar(){
    setNumero(numero + 1);
  }

  function subtrair(){
    setNumero(numero - 1);
  }

  return(
    <div className={styles.box}>
      <Button funcao={subtrair} text='-'/>
      <h2 className={styles.number}>{numero}</h2>
      <Button funcao={adicionar} text='+'/>
    </div>
  );
}