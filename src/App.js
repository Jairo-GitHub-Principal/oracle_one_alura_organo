import Banner from './componentes/banner/Banner';
import Form from './componentes/form';
import Time from './componentes/time' // importando o component Time
import { useState } from "react"
import Footer from './componentes/footer/index.js';

import timeModels from './componentes/models/timeModel.js' // importando o array de times para o componente Time

function App() {
  const [colaboradores, setColaboradores] = useState([]);


  const addColaborador = (colaborador) => {
    debugger // essa palavra chama um instrução que faz a v8 do chrome fazer um breakpoint e parar a aplicação
    // e nos permiter ver o que esta acontecendo execultando a aplicação linha por linha
    // console.log("App componente")
    // console.log(colaborador)

    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />

      <Form
        times={timeModels.map(time => time.nomeTime)} // aqui nos estamos percorrendo o array time  e p passando para o componente Form
        propsColaboradorFormComponent={(colaborador) => { addColaborador(colaborador) }} /> {/**aqui nos uma arrow function que chama a função de add colaboradores e a passa para 
      o componente Form via props e de fom vai para formComponent  */}

      {timeModels.map(time =>  /** aqui nos estamos percorrendo o array time  e p passando para o componente Time */

        <Time
          /** obs.:  */
          key={time.nomeTime}
          nomeTime={time.nomeTime} /** sera usado cono titulo da section do componente Time */
                   
          /*as props abaixo serao passadas para o componente Time e do onde a cor primario sera usada para definir 
          a cor de fundo do componente time, e ambas corPrimmari e corSecundaria serao usadase para definir 
          a cor do header e do corpo do card, respectivamente*/  
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          
          /** obs.: no codigo abaixo nos estamos percorrendo o array colaboradores e aplicamos um filtro
           * para que o colaborador que sera cadastrado sera exibido e renderizado apenas no time 
           * ao qual ele foi cadastrado ou seja: somente onde, o colaborador.timeState seja igual ao time.nomeTime
           * 
           * 
          */
          colaboradores={colaboradores.filter(colaborador =>colaborador.timeState === time.nomeTime)}

        />

      )}

      <Footer />




    </div>
  );
}

export default App;
