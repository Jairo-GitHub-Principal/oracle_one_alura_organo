
const MaiorDeIdade = ({ colaborador }) => {

    const idade = 19;

    return (<div>
        {idade >= 18 && <p>É maior de idade</p>}
        {idade < 18 && <p>Não é maior de idade</p>}
    </div>)
}

export default MaiorDeIdade