import "./time.css"
import Colaborador from "../colaboradores"
const Time = (props) => {
    // console.log("time")
    // console.log(props)
    const corPrimaria = { backgroundColor: props.corPrimaria } // essa é uma foram de definer um estilo inline no react jsx
    const corSecundaria = { borderColor: props.corSecundaria }
    return (
        /** abaixo temos o props.colaboradores.length > 0 que significa se o array colaboradores for maior que 0
         * então ele vai montar a extrutura do time, que é a estrutura do componente Time, onde os 
         * cards dos colaboradores serão exibidos e se o colaborador.length for 0 ele não vai exibir a estrutura do time,
         * aqui poderiamos também usar um ternario para isso
         */
        (props.colaboradores.length > 0) &&
        <section className="time__container" style={corPrimaria}>
            <h3
                style={{ borderColor: corSecundaria }} // outro forma de aplicar estilo inline no react
            >{props.nomeTime}</h3>

            <div className="time__colaboradores" >

                {props.colaboradores.map(colaborador =>
                    <Colaborador

                        corBodyCard={props.corPrimaria}
                        corHeader={props.corSecundaria}
                        key={colaborador.nomeState}
                        colaboradores={colaborador} /** aqui estamos enviando as informações  nome cargo e imagem para o componente colaborador  */
                    />)}
            </div>
        </section>
    )
}

export default Time