import { useState } from "react";

import Banner from "components/Banner";
import Footer  from "components/Footer";
import Gallery  from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import MostPopulars from "components/MostPopulars";

import styles from './homePage.module.css'

export default function HomePage (){

  const [mostPopulars] = useState(
    [
      {
        "id": "1",
        "name": "Nome da Foto",
        "img": "/assets/images/mostPopulars/foto-1.png",
      },
      {
        "id": "2",
        "name": "Nome da Foto",
        "img": "/assets/images/mostPopulars/foto-2.png",
      },

      {
        "id": "3",
        "name": "Nome da Foto",
        "img": "/assets/images/mostPopulars/foto-3.png",
      },
    ]
  )

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>

        <div className={styles.gallery}>
          <Gallery />
          <MostPopulars imgs={mostPopulars} />
        </div>
      </main>
      <Footer />
    </>
  )
}