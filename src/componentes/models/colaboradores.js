import React, { createContext, useState,useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TimeContext } from './useTimesModels';

export const ColaboradorContext = createContext();

export const ColaboradorProvider = ({ children }) => {
  const { timeModels } = useContext(TimeContext); // Acesse o timeModels aqui



 const [colaboradoresIniciais , setColaboradoresIniciais] = useState([
    {
      id:uuidv4(),// o uuidv4 cria um id unico e armazena na variavel id
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[0].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[0].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[0].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[0].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[1].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[1].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[1].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[1].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[2].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[2].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[2].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[2].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[3].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[3].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[3].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[3].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[4].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[4].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[4].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[4].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'JULIANA AMOASEI',
      favorito:false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: timeModels[5].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'DANIEL ARTINE',
      favorito:false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: timeModels[5].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'GUILHERME LIMA',
      favorito:false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: timeModels[5].nomeTime
    },
    {
      id:uuidv4(),
      nome: 'PAULO SILVEIRA',
      favorito:false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: timeModels[5].nomeTime
    },
  ])

  return (
    <ColaboradorContext.Provider value={{ colaboradoresIniciais, setColaboradoresIniciais }}>
      {children}
    </ColaboradorContext.Provider>
  );

}