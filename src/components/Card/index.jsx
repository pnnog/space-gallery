import styles from './card.module.css'
import fav  from "./favorito.png";
import open  from "./open.png";

export default function Card ({img, name, author, tag, id}) {
  return (
    <li className={styles.card_wrapper}>
      <img src={img} alt={name} />
      <div className={styles.description_wrapper}>
        
        <div className={styles.info}>
          <h5>{name}</h5>
          <p>{author}</p>
          <p>{tag}</p>
        </div>
         
        <div className={styles.buttons}>
          <img src={fav} alt="Favoritar" role='button' />
          <img src={open} alt="Expandir imagem" role='button' />
        </div>
      </div>
    </li>
  )
}