import BtnForm from "./btnForm"
import "./btnForm.css"

const BtnFormIndex = (props)=>{
    return(
        <div  className="container-button-style">
            {/*aqui nos usmos spread operator, para reppassar todo conteudo 
            que vamos receber onde o componente BtnFormIndex for chamado, para 
            o componente BtnForm */}
            <BtnForm {...props}/>
            
        </div>
    )
}

export default BtnFormIndex;