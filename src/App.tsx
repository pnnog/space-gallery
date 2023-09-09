import { useEffect, useState } from 'react'
import cardsJson from "./json/cards.json"

import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"
import Cabecalho from "./components/Cabecalho"
import Gallery from "./components/Gallery"


import * as S from './styles'
import Modal, { ModalCard } from './components/Modal'
import { filterCards } from './utils/filterCards'

export type CardsJsonProps =  typeof cardsJson

export type Filter = {
  tagId:number
  search:string
}

function App() {
  const [filteredCards, setFilteredCards] = useState<CardsJsonProps>(cardsJson)
  const [selectedCard, setSelectedCard] =  useState<ModalCard>(null)

  const [filter, setFilter] = useState<Filter>({
    tagId:0,
    search:''
  })

  useEffect(()=>{
    const cards = filterCards(cardsJson, filter)
    setFilteredCards(cards)
  }, [filter])

  return (
    <>
      <Cabecalho setFilter = {setFilter}/>
      <S.SectionBanner> 
        <AsideBar />
        <Banner text="A galeria mais completa de fotos do espaço!" />
      </S.SectionBanner>

      <S.SectionGallery>
        <Gallery filteredCards={filteredCards} setFilter={setFilter} setSelectedCard = {setSelectedCard}/>
      </S.SectionGallery>

      <Modal setSelectedCard = {setSelectedCard} card={selectedCard} />
    </>
 
  )
}

export default App
