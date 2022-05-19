type Props ={
  text:string;
  funcao:any;

}
export const Button = ({text,funcao}: Props) => {
  return(
    <button onClick={funcao}>{text}</button>
  );
}