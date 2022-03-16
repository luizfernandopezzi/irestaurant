import styles from "pages/Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "components/buscador/Buscador";
import { useState } from "react";
import Filtros from "components/filtros/Filtros";
import Ordenador from "components/ordenador/Ordenador";
import Foods from "components/foods/Foods";

export default function Cardapio() {
  const [busca, setBusca] = useState<string>('');
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState<string>('')

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa da massa!
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
      </section>
      <Foods busca={busca} filtro={filtro} ordenador={ordenador}/>
    </main>
  )
}