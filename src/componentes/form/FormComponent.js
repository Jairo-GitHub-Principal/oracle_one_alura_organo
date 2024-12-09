
import BtnFormIndex from "../btnComponents"
import DropDownList from "../dropDownList"
import FieldText from "../fieldText/FieldText"
import { useState } from "react"
import "./FormComponent.css"
import { v4 as uuidv4 } from 'uuid';

// essa é uma forma de exportar um componente, aqui eu posso criar varios componente para formulario, como campos e botões
// e esporta-lo um a um para o componente no arquivo index e exportar o componente formulario ja montado pelo componente
// no componente do arquivo index
export const FormComponent = (props) => { // essa é uma das formas de exportar um componente, exportar diretamente como uma constante
    // lista para ser passada para o nosso componente dropDownList


    /** states para controlar os inputs, e serem exibidos na tela  */

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Nenhum time selecionado')
    const [favorito, setFavorito] = useState(false)

    const [nomeTime, setNomeTime] = useState('')
    const [corTime1, setCorTime1] = useState('')
    const id = uuidv4()
    // funççao que vai chamar a função setstate pra alterar o state



    /** função que sera chamada quando o botão for clicado */
    const criateCard = (e) => {
        e.preventDefault()
        // console.log("criar card")
        // console.log("Form foi submetido ",nomeState,cargoState,imagemState,timeState)
        props.propscolaboradorForm({ /** essa função vem do nivel mais alto da aplicação, para que a mudança feita possa refletir em todos os estados até chegar no compenente que deve ser aplicada */

            nome,
            cargo,
            imagem,
            time,
            favorito,
            id
         })

        /** limpar os inputs após serem submetidos o formulario */
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Nenhum time selecionado')


    }





    return (
        <section className="formComponent">
            <form onSubmit={criateCard}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <FieldText
                    value={nome} // valor atualmente definido para o input
                    valor={nome} // valor que sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB apos ser definido pelo state
                    stateAlterado={(valorDigitadoNoInput) => { setNome(valorDigitadoNoInput) }} //props la no componente FieldText que esta recebemdo uma arrow function e chamando a função que altera o state, esse codigo poderis ter sido escrito assim: valorDigitadoNoInput => setNomeState(valorDigitadoNoInput) essa é a fomra mais ultilizada por escrever menos
                    // e esse valor sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB       
                    label="Nome" placeholder="Digite seu nome" required={true} />


                <FieldText
                    value={cargo}
                    valor={cargo}
                    stateAlterado={valor => setCargo(valor)}
                    label="Cargo" placeholder="Digite seu cargo" required={true} />


                <FieldText
                    value={imagem}
                    valor={imagem}
                    stateAlterado={valor => setImagem(valor)}
                    label="Imgem" placeholder="Digite o endereço da imagem" />

                <DropDownList /*passnado o array de itens para o compaonente */
                    required={true}
                    label="Time"
                    itens={props.times} // os valores para essa props itens esta definida la no app.js de la esta sendo passada para o componente Form, e dele para FormComponent 
                    valor={time}
                    stateAlterado={itemSelecionadoNaLista => setTime(itemSelecionadoNaLista)} /> {/* muda o valor do state para o item que  foi seleciondaso na lista dropDown*/}


                {/* obs.: que abaixo usamos uma nova forma de passar propriedades
                para o nosso componente, usando o spread operator 
                obs tambem que passamos uma propros required={true} isso não é um atributo html, é apenas 
                uma propriedae sendo passado para o componente, onde ele ira ser usada para  de fato
                validar o  atributo html "requirid" */}
                <BtnFormIndex className="button-style">Criar Card </BtnFormIndex>

            </form>

          
          
          
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ nomeTime: nomeTime, corPrimaria:corTime1 })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>

                <FieldText
                    value={nomeTime} // valor atualmente definido para o input
                    valor={nomeTime} // valor que sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB apos ser definido pelo state
                    stateAlterado={(valorDigitadoNoInput) =>  setNomeTime(valorDigitadoNoInput) } //esse é um jeito de alterar o state, props la no componente FieldText que esta recebemdo uma arrow function e chamando a função que altera o state, esse codigo poderis ter sido escrito assim: valorDigitadoNoInput => setNomeState(valorDigitadoNoInput) essa é a fomra mais ultilizada por escrever menos
                    // e esse valor sera passado para o componente FieldText, para ser exibido na tela e enviado para o DB       
                    label="Nome do time" placeholder="Digite o nome do time" required={true} />


                <FieldText
                    
                    value={corTime1}
                    valor={corTime1}
                    type="color"
                    stateAlterado={(valorColorSelect) => setCorTime1(valorColorSelect) } // esse é outro jeito de alterar o state, esse codigo poderis ter sido escrito assim: valorDigitadoNoInput => setNomeState(valorDigitadoNoInput) essa é a fomra mais ultilizada por escrever menossetCargo(valor)} 
                    label="Cor Primaria" placeholder="Digite a Cor Primaria" required={true} />

               




                {/* obs.: que abaixo usamos uma nova forma de passar propriedades
                para o nosso componente, usando o spread operator 
                obs tambem que passamos uma propros required={true} isso não é um atributo html, é apenas 
                uma propriedae sendo passado para o componente, onde ele ira ser usada para  de fato
                validar o  atributo html "requirid" */}
                <BtnFormIndex className="button-style">Criar Time </BtnFormIndex>

            </form>
        </section>
    )
}