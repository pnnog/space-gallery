import Card from "../Card";
import styles from './cards.module.css'


export default function Cards({cards}) {
  return (
    <ul className={styles.cards}>
      {cards.map(card => (
        <Card key={card.id}{...card} />
      ))}
  </ul>
    
  )
}
