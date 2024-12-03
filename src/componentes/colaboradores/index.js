
import "./colaboradores.css"
const Colaborador = (props) => {
    // console.log("colaborador")
    //  console.log(props.colaboradores)
     // imagem de teste: https://github.com/Jairo-GitHub-Principal.png

    

    return (
        <div className="colaborador" style={{backgroundColor:props.corBodyCard }}>
            <div className="colaborador__detalhe_cor" style={{backgroundColor:props.corHeader}}></div>
            <div className="colaborador__imagem">
               <img src={props.colaboradores.imagemState} alt={props.colaboradores.nomeState}/>
            </div>
            <div className="colaborador__info" >
                <h4 className="colaborador__nome">{props.colaboradores.nomeState}</h4>
                <h5 className="colaborador__cargo">{props.colaboradores.cargoState}</h5>
            </div>
        </div>
    );
};

export default Colaborador