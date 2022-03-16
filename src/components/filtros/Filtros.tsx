import filtros from 'components/filtros/filtros.json'
import styles from 'components/filtros/Filtros.module.scss'

// type opcao = typeof filtros[0]
interface Opcao {
    label: string;
    id: number
}

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props){
    function selecionarFiltro(opcao: Opcao){
        if(filtro === opcao.id){
            return setFiltro(null)
        }
        return setFiltro(opcao.id)
    }
    
    return(
        <div className={styles.filtros}>
            {filtros.map( opcao => (
                <button 
                    className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles['filtros__filtro--ativo'] : ''}`} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}