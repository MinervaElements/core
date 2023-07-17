import Eliezer from './components/eliezer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Eliezer mi_apellido="ramirez" />
      <a href="https://www.youtube.com/watch?v=Cm5UbCxc3-c">CLICKEA ACÁ PARA CAMBIAR EL MUNDO</a>
    </main>
  )
}
