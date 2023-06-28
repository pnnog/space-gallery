import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import styles from './homePage.module.css'

export default function HomePage (){
  return (
    <>
      <Header/>
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
    </>
  )
}