import styles from './tags.module.css'
export default function Tags() {
  return (
    <div className={styles.tags_wrapper}>
      <h3 className={styles.title}>Filtre por tags:</h3>
      <nav className={styles.navbar}> 
        <ul className={styles.list}>
            <li>
              <a href="/">Estrelas</a>
            </li>

            <li>
              <a href="/">Galáxias</a>
            </li>

            <li>
              <a href="/">Lua</a>
            </li>

            <li>
              <a href="/">Planetas</a>
            </li>
        </ul>
      </nav>

    </div>
  )
}
