import React from 'react'

import inicio from '../../assets/icones/home-ativo.png'
import maisCuritdas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendame from '../../assets/icones/surpreenda-me-inativo.png'

import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <img src={inicio} alt="icone" />
          <a href='/'>Início </a>
        </li>

        <li>
          <img src={maisCuritdas} alt="icone" />
          <a href='/'>Mais curtidas </a>
        </li>

        <li>
          <img src={maisVistas} alt="icone" />
          <a href='/'>Mais vistas </a>
        </li>

        <li>
          <img src={novas} alt="icone" />
          <a href='/'>Novas </a>
        </li>

        <li>
          <img src={surpreendame} alt="icone" />
          <a href='/'>Surpreenda-me </a>
        </li>
      </ul>
    </nav>
  )
}
