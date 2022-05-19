type Props = {
  nome?: string; 
  sobrenome?: string; 
  idade?: number;
  tecnologia : 'ReactJS' | 'NodeJS';  
}

export const Header = ({nome,sobrenome,idade,tecnologia}:Props) =>{
  return(
      <header>
        <h1> Olá! Meu nome é {nome} {sobrenome}, tenho {idade} anos e estou estudando {tecnologia} no momento. </h1>
      </header>
  )
}