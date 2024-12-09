// import { useState } from "react"
import "./FieldText.css"
const FieldText = ({stateAlterado,label, valor,type="text",  placeholder, required}) => {
    
    
    
        const digitado = (e)=>{ // função que sera chamada quando ocorrer um evento onchange, no input
                            // qualquer coisa que for digitada no input, essa funcao sera chamada
        //console.log(props.value) // testa se o state foi alterado    
        stateAlterado(e.target.value) 
        // tudo que for digitado no input, vai ser passado para a props stateAlterado que foi criada,
        // aqui no componente FieldText, e essa props vai ser chamada la no componente formulario
        // onde sera passada pra ela a funçção que vai alterar o state 
    }
    return(
        
        <div className={`field-Text field-${type}`}>
            <label>{label}</label>
            <input 
            onChange={digitado}
            value={valor} /** a props valor é é definida nessa  input e sera chamada 
              la no componente formulario onde ela recebera o state, que vai ser alterado aqui ,
             so que la no componente formulario ela recebe um state como valor , e esse state vai ser alterado
             aqui quando o input for alterado, a alteração desse state, é feito aqui atraves de uma propriedade
             chamada stateAlterado,que foi criada aqui no componente FieldText,e sera chamada la no componente formulario:
             e  la no componente formulario recebe o setState que é uma função do state usada para alterear 
             o state, essa função la no formulario é atribuida para a propriedade stateAlterado  para ser passado 
             para esse  componente atraves de uma props, e aqui a props stateAlterado, que tambem devido a função 
              setstate ter sido atribuida  a ele, ele passa a ser a funçção que vai alterar o states, 
              e essa funcao vai ser chamado na função  digitado que vai ser chamada através do evento onchange toda vez
              que o input ser lterado    */
             type={type} 
             required={required} 
             placeholder={placeholder} />
        </div>
    )
}


export default FieldText