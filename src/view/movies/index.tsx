import React, { ChangeEvent } from "react";
import { useState, useEffect } from 'react';
import { Link } from "../../components/Link"; 

type Movie ={
  titulo:string,
  avatar:string,
};

const Movie: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setMovies(json);
      });
  }
  return (
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <h1>Requisição Simples - Filmes em Cartaz</h1>

      <button onClick={loadMovies}>Carregar Filmes</button>

      <p>Total de Filmes: {movies.length}</p>

      <div className="filmes">
        {movies.map((item,index) => (
          <div className="filmesBox">
            <img src={item.avatar} alt={`Filme: ${item.titulo}`} />
            <p>{item.titulo}</p>
          </div>
        ))}
      </div>
      
    </div>  
   );
}

export default Movie;