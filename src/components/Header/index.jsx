import logo from './logo.png'
import search from './search.png'
import styles from  './header.module.css'

export default function Header () {
  
  return(
    <header className={styles.header}>
      <img src={logo} alt="Logo da Alura Space" />
      <div className={styles.buttons}>
        <input type="text" placeholder='O que você procura?'/>
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  )
}