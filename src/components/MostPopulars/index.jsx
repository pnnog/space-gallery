import styles from './mostPopulars.module.css'
import Button from 'components/Button'

export default function MostPopulars({imgs}) {
  function handleOnClick(e) {
    e.preventDefault()
  }

  return (
    <aside className={styles.mostPopulars_wrapper}>
      <h4>Populares</h4>
      <ul className={styles.list}>   
        {imgs.map(img=> (
          <li key={img.id} className={styles.item}>
            <img src={img.img} alt={img.name}  />
          </li>
        ))}
      </ul>
      <Button onClick={handleOnClick}> Ver mais fotos</Button>
    </aside>
  )
}
