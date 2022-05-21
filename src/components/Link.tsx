import React from 'react';

type Props ={
  url:string;
  texto:string;
}
export const Link = ({url,texto}: Props) => {
  return(
    <a href={url}>{texto}</a>
  );
}