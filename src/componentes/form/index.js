import "./index.css"
import { FormComponent } from "./FormComponent"


function Form(props){
  return(
    /** aqui no form component nos  estamos recebendo uma props via parametro 
     * que é a prps propsColaboradorFormComponent e estamos repassando ela para o componente FormComponent
     * direto para a props propscolaboradorForm   */
    <div className="form">
      
    <FormComponent // chamada do componente FormComponent
    
    times={props.times} // chamada da propriedade times do componente FormComponent e passamos ela para o componente FormComponent
    propscolaboradorForm={props.propsColaboradorFormComponent} /** aqui temos uma props chamada colaboradorCadastrado, 
      que esta recebendo uma outra props
    */
    
    />
    </div>
  )  
}


export default Form