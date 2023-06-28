import styles from './banner.module.css'
import bannerImage from './banner.png'

export default function Banner() {
  return (
    <div className={styles.banner} style={{backgroundImage: `url(${bannerImage})`}}>
      <h1>A galeria mais completa do espaço</h1>
    </div>
  )
}
