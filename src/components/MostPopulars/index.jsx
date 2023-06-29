import styles from './mostPopulars.module.css'

export default function MostPopulars({imgs}) {
  return (
    <aside className={styles.mostPopulars_wrapper}>
      <h4>Populares</h4>
      {imgs.map(img=> <img src={img.img} alt={img.name} key={imgs.id} /> )}
    </aside>
  )
}
