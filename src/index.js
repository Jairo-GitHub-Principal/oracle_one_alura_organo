import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TimeProvider } from './componentes/models/useTimesModels';
import { ColaboradorProvider } from './componentes/models/colaboradores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimeProvider> {/** envolve a aplicação com o provedor do contexto de timesModels tornando o state times model acessivel em toda a aplicação */}
        <ColaboradorProvider>
        <App />
        </ColaboradorProvider>
    </TimeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
