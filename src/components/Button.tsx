import React from 'react';

type Props ={
  text:string;
  funcao:React.MouseEventHandler<HTMLButtonElement>;

}
export const Button = ({text,funcao}: Props) => {
  return(
    <button onClick={funcao}>{text}</button>
  );
}