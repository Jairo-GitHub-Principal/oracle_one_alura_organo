
import BtnFormIndex from "../btnComponents"
import DropDownList from "../dropDownList"
import FieldText from "../fieldText/FieldText"
import { useState } from "react"
import "./FormComponent.css"
// essa é uma forma de exportar um componente, aqui eu posso criar varios componente para formulario, como campos e botões
// e esporta-lo um a um para o componente no arquivo index e exportar o componente formulario ja montado pelo componente
// no componente do arquivo index
export const FormComponent = (props) => { // essa é uma das formas de exportar um componente, exportar diretamente como uma constante
    // lista para ser passada para o nosso componente dropDownList
      
    
    /** states para controlar os inputs, e serem exibidos na tela  */

    const [nomeState, setNomeState] = useState('')
    /* obs.: nomeState = State, setNomeState = setState*/ 
    const [cargoState, setCargoState] = useState('')
    const [imagemState, setImagemState] = useState('')
    const [timeState, setTimeState] = useState('Nenhum time selecionado')
    // funççao que vai chamar a função setstate pra alterar o state

    

    /** função que sera chamada quando o botão for clicado */
    const criateCard = (e)=>{
        e.preventDefault()
        // console.log("criar card")
        // console.log("Form foi submetido ",nomeState,cargoState,imagemState,timeState)
        props.propscolaboradorForm({

            nomeState,
            cargoState,
            imagemState,
            timeState
        } ) 
        
        /** limpar os inputs após serem submetidos o formulario */
        setNomeState('')
        setCargoState('')
        setImagemState('')
        setTimeState('Nenhum time selecionado')


    }

   
    
    return (
        <section className="formComponent">
            <form onSubmit={criateCard}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <FieldText 
                value={nomeState} // valor atualmente definido para o input
                valor={nomeState} // valor que sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB apos ser definido pelo state
                stateAlterado={(valorDigitadoNoInput) => {setNomeState(valorDigitadoNoInput)}} //props la no componente FieldText que esta recebemdo uma arrow function e chamando a função que altera o state, esse codigo poderis ter sido escrito assim: valorDigitadoNoInput => setNomeState(valorDigitadoNoInput) essa é a fomra mais ultilizada por escrever menos
                                                             // e esse valor sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB       
                label="Nome" placeholder="Digite seu nome"  required={true}/>

               
                <FieldText 
                value={cargoState} 
                valor ={cargoState}
                stateAlterado={valor => setCargoState(valor)} 
                label="Cargo" placeholder="Digite seu cargo"required={true} />
                
                
                <FieldText  
                value={imagemState} 
                valor={imagemState}
                stateAlterado={valor => setImagemState(valor)} 
                label="Imgem" placeholder="Digite o endereço da imagem"  />
                
                <DropDownList /*passnado o array de itens para o compaonente */ 
                        required={true}
                        label="Time" 
                        itens={props.times} // os valores para essa props itens esta definida la no app.js de la esta sendo passada para o componente Form, e dele para FormComponent 
                        valor={timeState}
                        stateAlterado={itemSelecionadoNaLista => setTimeState(itemSelecionadoNaLista)}/> {/* muda o valor do state para o item que  foi seleciondaso na lista dropDown*/ }
                       
                
                {/* obs.: que abaixo usamos uma nova forma de passar propriedades
                para o nosso componente, usando o spread operator 
                obs tambem que passamos uma propros required={true} isso não é um atributo html, é apenas 
                uma propriedae sendo passado para o componente, onde ele ira ser usada para  de fato
                validar o  atributo html "requirid" */}
                <BtnFormIndex className="button-style">Criar Card </BtnFormIndex> 
                
            </form>
        </section>
    )
}