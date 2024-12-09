import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Criação do Contexto
export const TimeContext = createContext();

// Provedor do Contexto
export const TimeProvider = ({ children }) => {
  const [timeModels, setTimeModels] = useState([
    {
      nomeTime: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
      id: uuidv4()
    },
    {
      nomeTime: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
      id: uuidv4()
    },
    {
      nomeTime: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
      id: uuidv4()

    },
    {
      nomeTime: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
      id: uuidv4()

    },
    {
      nomeTime: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nomeTime: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
      id: uuidv4()

    },
    {
      nomeTime: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29',
      id: uuidv4()

    },
  ]);

  return (
    <TimeContext.Provider value={{ timeModels, setTimeModels }}>
      {children}
    </TimeContext.Provider>
  );
};
