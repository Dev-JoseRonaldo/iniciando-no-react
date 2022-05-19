type Props = {
  data:{
    name: string;
    idade: number;
  }
}

export const List = ({ data } : Props) => {
  return (
    <li>{data.name.toUpperCase()}  -  {data.idade}</li>
  );
}