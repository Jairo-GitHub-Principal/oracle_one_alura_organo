
import "./colaboradores.css"
import { IoTrashBinSharp } from "react-icons/io5";
import { FaHeart,FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {
    //console.log(props.colaboradores)
    // imagem de teste: https://github.com/Jairo-GitHub-Principal.png


    //console.log(colaboradoresIniciais)// testando o acesso aos colaboradores ecessando diretamente o context   
function favoritar(){
    props.favoritarColaborador(props.colaboradores.id)

}
    return (
        <div className="colaborador" style={{ backgroundColor: props.corBodyCard }}>

            <div className="colaborador__detalhe_cor" style={{ backgroundColor: props.corHeader }}>
                <div className="colaborador__deletar" >
                    <IoTrashBinSharp
                        className="colaborador__deletar_icone"
                        onClick={() => props.deletarColaborador(props.colaboradores.id)} />
                </div>
            </div>
            <div className="colaborador__imagem">
                <img src={props.colaboradores.imagem} alt={props.colaboradores.nomeState} />
            </div>
            <div className="colaborador__info" >
                <h4 className="colaborador__nome">{props.colaboradores.nome}</h4>
                <h5 className="colaborador__cargo">{props.colaboradores.cargo}</h5>
                
            </div>
            <div className="colaborador__favoritar">
                            
                            {props.colaboradores.favorito ? 
                            <FaHeart 
                            color="red"
                            className="colaborador__favoritar_icone"
                            onClick={favoritar}

                           />:
                            <FaRegHeart 
                            className="colaborador__favoritar_icone" 
                            onClick={favoritar}/>
                            }
                           
                </div>

        </div>
    );
};

export default Colaborador