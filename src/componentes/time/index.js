import hexToRgba from 'hex-to-rgba';

import "./time.css";
import Colaborador from "../colaboradores";
import {  useContext } from "react";
import { TimeContext } from "../models/useTimesModels"; // Importando o TimeContext

const Time = (props) => {
    // console.log("Time Colaboradores",props.colaboradores)
    // console.log("Time time",props.time)

    
    
    /** abaixo um acesso a um estado compartilhado que foi criado em um contexto usando useContext
     * não confundo o acesso compartilhado abaixo com um state
     */
    const { setTimeModels } = useContext(TimeContext); // Acessando timeModels e setTimeModels do contexto
   //console.log("Time ",props.id) // esse é  o id do time que recebemos através de props

    //console.log(props.colaboradoresIniciais) // aqui chegou os colaboradores iniciais
    // Criar um estado para a cor primária e cor secundária

    // Função para mudar a cor, também precisa atualizar o estado do contexto
    function mudarCor(cor, id) {
        // Atualizando o estado global de timeModels para refletir a mudança de cor
        setTimeModels( timesModelsAnterior=> { /** aqui nos temo o estado anterior do state timeModels, 
            representado pelo argumento timesModelsAnterior, sempre que um primeiro argumento passado 
            para o setState esse argumento vai representar o estado anterior do state que sera atualizado
             */
            return timesModelsAnterior.map((time) => {
                if (time.id === id) {
                    // console.log("time anterior",time.nomeTime," time atualizado",nome)
                    return {
                        ...time,
                        corSecundaria:cor, // Atualizando apenas a corSecundaria do time correspondente cor, // Atualizando apenas a corPrimaria do time correspondente
                        corPrimaria: hexToRgba(cor, 0.15), // aqui muda a cor de  fundo do componente time
                    };
                }
                return time;
            });
        });
    }

    return (
        (props.colaboradores.length > 0) &&
         (
            <section className="time__container" style={{ backgroundColor: props.corPrimaria }}>
                <input
                    type="color"
                    value={props.corSecundaria}
                    onChange={(e) => mudarCor(e.target.value, props.id)}
                />
                <h3
                    style={{ borderColor: props.corSecundaria, color: props.corSecundaria }}
                >
                    {props.nomeTime}
                </h3>

                <div className="time__colaboradores">
                    {props.colaboradores.map((colaborador) => {
                        return (
                            <Colaborador
                                corBodyCard={props.corPrimaria}
                                corHeader={props.corSecundaria}
                                key={colaborador.nomeState}
                                deletarColaborador={props.deletarColaborador}
                                colaboradores={colaborador}
                                favoritarColaborador={props.favoritarColaborador}
                                
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Time;
