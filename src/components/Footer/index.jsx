import styles from './footer.module.css'

import fb from './facebook.svg'
import ig from './instagram.svg'
import tt from './twitter.svg'

export default function Footer(){
  return (
    <footer className={styles.footer}> 
      <nav>
        <a href='#facebook'  className={styles.link}>
          <img src={fb} alt="Logo do facebook"/>
        </a>
        
        <a href='#twitter' className={styles.link}>
          <img src={tt} alt="Logo do twiiter" />
        </a>

        <a href='https://www.instagram.com/pnnog' target='_blank' className={styles.link} rel="noreferrer">
        < img src={ig} alt="Logo do instagram" />
        </a>
      </nav>
     </footer>
  )
}