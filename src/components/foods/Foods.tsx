import foods from 'components/foods/foods.json'
import styles from 'components/foods/Foods.module.scss'
import Item from 'components/foods/item/Item'
import { useMemo } from 'react';
import { Food } from 'types/Food';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string
}

function handleMatchSearch(busca: string, title: string) {
    if (!busca) return true;
    const valueTitle = title.toLocaleLowerCase();
    return valueTitle.includes(busca.toLowerCase());
}

function handleMatchFilter(id: number, filtro: number | null) {
    if (!filtro) return true;
    return id === filtro;
}

function sortBy(key: string) {
    return (a: Food, b: Food) => (
        a[key as keyof Food] > b[key as keyof Food] ? 1 : -1
    )
}

export default function Foods({ busca, filtro, ordenador }: Props) {
    const filteredFoods = useMemo(() =>
        foods.reduce((arr: Food[], nextValue: Food) => {
            const matchSearch = handleMatchSearch(busca, nextValue.title);
            const matchFilter = handleMatchFilter(nextValue.category.id, filtro)
            if (matchSearch && matchFilter) arr.push(nextValue);
            return arr;
        }, []), [busca, filtro]);

    const sortedFoods = useMemo(() => filteredFoods.sort(sortBy(ordenador)),[ordenador, filteredFoods]);

    return (
        <div className={styles.itens}>
            {sortedFoods.map(item => (
                <Item
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}