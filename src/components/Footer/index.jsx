import styles from '../Footer/footer.module.css'

import fb from './facebook.svg'
import ig from './instagram.svg'
import tt from './twitter.svg'

export function Footer(){
  return (
    <footer className={styles.footer}> 
      <nav>
        <a href='/' target='_blank'  className={styles.link}>
          <img src={fb} alt="Logo do facebook"/>
        </a>
        
        <a href='/' target='_blank' className={styles.link}>
          <img src={tt} alt="Logo do twiiter" />
        </a>

        <a href='/' target='_blank' className={styles.link}>
        < img src={ig} alt="Logo do instagram" />
        </a>
      </nav>
     </footer>
  )
}