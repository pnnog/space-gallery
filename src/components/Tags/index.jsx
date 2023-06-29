import styles from './tags.module.css'

export default function Tags({tags, handleOnClick, setCardsFiltered, cards}) {
  return (
    <div className={styles.tags_wrapper}>
      <h3 className={styles.title}>Filtre por tags:</h3>
      <nav className={styles.navbar}> 
        <ul className={styles.list}>
          {tags.map(tag=> (
            <li key={tag} onClick={()=> handleOnClick(tag)}> 
              <a href={`#${tag}`}>{tag}</a>
            </li>
          ))}
          <li  onClick={()=> setCardsFiltered(cards)}>
            <a href='#todas'>Todas</a>
            </li>
        </ul>

      </nav>

    </div>
  )
}
