import { useState } from 'react'
import Cards from '../Cards'
import Tags from '../Tags'
import styles from './gallery.module.css'


export function Gallery() {

  const [cards, setCards] = useState(
    [
      {
        "id": "1",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-1.png",
        "author": "Alura Space",
        "tag": "Galáxias"
      },
      {
        "id": "2",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-2.png",
        "author": "Alura Space",
        "tag": "Estrelas"
      },
      {
        "id": "3",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-3.png",
        "author": "Alura Space",
        "tag": "Lua"
      },
      {
        "id": "4",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-4.png",
        "author": "Alura Space",
        "tag": "Galáxias"
      },
      {
        "id": "5",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-5.png",
        "author": "Alura Space",
        "tag": "Estrelas"
      },
      {
        "id": "6",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-6.png",
        "author": "Alura Space",
        "tag": "Nebulosas"
      },
      {
        "id": "7",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-7.png",
        "author": "Alura Space",
        "tag": "Galáxias"
      },
      {
        "id": "8",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-8.png",
        "author": "Alura Space",
        "tag": "Nebulosas"
      },
      {
        "id": "9",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-9.png",
        "author": "Alura Space",
        "tag": "Estrelas"
      },
      {
        "id": "10",
        "name": "Nome da Foto",
        "img": "/assets/images/gallery/foto-10.png",
        "author": "Alura Space",
        "tag": "Estrelas"
      }
    ]
  )

  return (
    <section className={styles.gallery_wrapper}>
      <h2> Navegue pela galeria</h2>
        <Tags />
        <Cards cards ={cards}/>
    </section>
  )
}