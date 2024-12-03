import "./dropDaownList.css"


 export const DropDownList = (props) =>{ // essa é uma das formas de exportar um componente, exportar diretamente como uma constante
    // console.log(props.itens) testa a se tem algo na lista de itens
    return (
        <div className="dropdownlist" >
            <label>{props.label}</label>
            
            <select 
            required={props.required} // props required, recebe um valor do formulario que aqui nos a definimos como props.required
            value={props.valor} // para o value esta sendo passado a props.valor
            onChange={evento => props.stateAlterado(evento.target.value)} /** no evento onchange, quando o input for alterado, a arraw function atribuida para a propriedade stateAlterado, sera chamada */
            >
                <option value=""></option> {/* aqui estamos criando uma opção vazia para o select */}
               {props.itens.map(item => 
               <option key={item}>{item}</option>
               )}

            

            </select>
        </div>
    )
}   

// esse componente estara sendo importado no nosso arquivo index que fara a exportação como default

