import styles from 'components/foods/item/Item.module.scss'
import foods from 'components/foods/foods.json'

// type Props = typeof foods[0]
interface Props {
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
        }
    }
}

export default function Item({ item }: Props){
    const image = item.photo
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={image} alt="Foto do Prato"/>
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={`
                    ${styles.item__tipo} 
                    ${styles[`item__tipo__${item.category.label.toLowerCase()}`]}
                    `}>{item.category.label}</div>

                    <div className={styles.item__porcao}>{item.size} g</div>
                    <div className={styles.item__qtdpessoas}>{item.serving}</div>
                    <div className={styles.item__valor}>R$ {item.price}</div>
                </div>
            </div>
        </div>
    )
}