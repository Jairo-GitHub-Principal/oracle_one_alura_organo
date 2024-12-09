import Banner from './componentes/banner/Banner';
import Form from './componentes/form';
import Time from './componentes/time' // importando o component Time
import Footer from './componentes/footer/index.js';
import { useContext } from "react"
import { v4 as uuidv4 } from 'uuid';

import { TimeContext } from './componentes/models/useTimesModels.js';
import { ColaboradorContext } from './componentes/models/colaboradores.js';

function App() {
  const {timeModels,setTimeModels} = useContext(TimeContext)
  
  const {colaboradoresIniciais,setColaboradoresIniciais} = useContext(ColaboradorContext)
  
  const addColaborador = (colaborador) => {
    //debugger // essa palavra chama um instrução que faz a v8 do chrome fazer um breakpoint e parar a aplicação
    // e nos permiter ver o que esta acontecendo execultando a aplicação linha por linha
    setColaboradoresIniciais( prevState => [...prevState, colaborador])
    console.log("App Novo colaborador",colaborador)
  }

    function cadastrarTime(novoTime) {
      console.log("cadastrarTime",novoTime)
      setTimeModels( prevState => [...prevState, {...novoTime}])
    }

    function favoritarColaborador(id) {
      console.log("favoritar colaborador",id)
      setColaboradoresIniciais( colaboradoresIniciais.map(colaborador => {
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito
        }
        return colaborador
      }))
    }

  function deletarColaborador(id) {
    setColaboradoresIniciais( colaboradoresIniciais.filter(colaborador => colaborador.id !== id))
    console.log("deletar colaborador",id)
  }
  return (
    <div className="App">
      <Banner />

      <Form
      
        times={timeModels.map(time => time.nomeTime)} // aqui nos estamos percorrendo o array time  e p passando para o componente Form
        cadastrarTime={cadastrarTime}
        propsColaboradorFormComponent={(colaborador) => { addColaborador(colaborador) }} /> {/**aqui nos uma arrow function que chama a função de add colaboradores e a passa para 
      o componente Form via props e de fom vai para formComponent  */}

      {timeModels.map(time =>  /** aqui nos estamos percorrendo o array time  e p passando para o componente Time */
            
        <Time
          /** obs.:  */
          key={time.nomeTime}
          time={time}
          nomeTime={time.nomeTime} /** sera usado cono titulo da section do componente Time */
          id={time.id}  // aqui nos atribuimos o id criado por uuidv4 como valor para a props "id" para ser usada no componente Time 
                
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
         deletarColaborador={deletarColaborador}
         favoritarColaborador={favoritarColaborador}
         /**abaixo estamos passando os colaboradores para a props colaboradores */
          colaboradores={colaboradoresIniciais.filter(

            colaborador =>colaborador.time === time.nomeTime
            
          )}
          
        />

      )}

      <Footer />




    </div>
  );
}

export default App;
