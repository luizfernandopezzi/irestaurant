import foods from 'components/foods/foods.json'
import styles from 'components/foods/Foods.module.scss'
import Item from 'components/foods/item/Item'

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string
}

interface Item {
    item: {
        title: string;
        description: string;
        photo: string;
        size: number;
        serving: number;
        price: number;
        id: number;
        category: {
            id: number;
            label: string;
        };
        sortBy: () => void;
    }
}

export default function Foods( {busca, filtro, ordenador }: Props ){
    function sortBy(key: string) {
        return function(a: any, b: any){
            if (a[key] > b[key]) {
            return 1;
            }
            if (a[key] < b[key]) {
            return -1;
            }
            // a must be equal to b
            return 0;
        }
    }

    const buscadorFoods = foods.filter(
        (item) => (item.title.toLowerCase().indexOf(busca.toLowerCase()) > -1)
    ).sort(sortBy(ordenador))
    
    const filtrosFoods = buscadorFoods.filter(
        (item) => item.category.id === filtro
    ).sort(sortBy(ordenador))

    return(
        <div className={styles.itens}>
            {!filtro 
                ? buscadorFoods.map(item =>(<Item key={item.id} item={item}/>))
                : filtrosFoods.map(item=>(<Item key={item.id} item={item}/>))
            }
        </div>
    )
}