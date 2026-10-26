interface Tipo{
    nome: string,
    valor: string
}

interface Props{
    tipoSelecionado: string,
    setTipoSelecionado: (tipo: string) => void,
    tipos:Tipo[]
}

export default function FiltroTipo({ tipoSelecionado, setTipoSelecionado, tipos}:Props){
    return(
        <div>
            <select value={tipoSelecionado} onChange={(e) => setTipoSelecionado(e.target.value)}>
                <option value="Todos">Todos os tipos</option>
                {tipos.map((tipo) =>(
                    <option key={tipo.valor} value={tipo.valor}>{tipo.nome}</option>
                ))}
            </select>
        </div>
    )
}