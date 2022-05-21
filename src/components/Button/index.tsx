import React from 'react';
import styles from './styles.module.css'

type Props ={
  text:string;
  funcao:React.MouseEventHandler<HTMLButtonElement>;

}
export const Button = ({text,funcao}: Props) => {
  return(
    <button className={styles.button} onClick={funcao}>{text}</button>
  );
}