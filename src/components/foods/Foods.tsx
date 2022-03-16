import foods from 'components/foods/foods.json'
import styles from 'components/foods/Foods.module.scss'
import Item from 'components/foods/item/Item'
import { useEffect, useState } from 'react';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string
}

export default function Foods( {busca, filtro, ordenador }: Props ){
    const [lista, setLista] = useState(foods)

    function buscador(itemTitle: string){
        return (itemTitle.toLowerCase().indexOf(busca.toLowerCase()) > -1)
    }

    function filtrador(itemId: number){
        if(filtro === null){
            return true;
        }else{
            return itemId === filtro
        }
    }

    function sortBy(novaLista: typeof foods) {
        switch(ordenador){
            case 'title':
                return novaLista.sort((a, b) => a.title> b.title ? 1 : -1);
            case 'serving':
                 return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1);
            case 'size':
                return novaLista.sort((a,b) => a.size > b.size ? 1 : -1);
            case 'price':
                 return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
            default:
                return novaLista; 
        }
    }
    
    useEffect(() => {
        const novaLista = foods.filter((item) => buscador(item.title) && filtrador(item.category.id))
        setLista(sortBy(novaLista))
    }, [busca, filtro, ordenador])
    

    return(
        <div className={styles.itens}>
            {lista.map(item =>(<Item key={item.id} item={item}/>))}
        </div>
    )
}