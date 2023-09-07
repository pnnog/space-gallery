import { useState } from 'react'
import cardsJson from "./json/cards.json"

import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"
import Cabecalho from "./components/Cabecalho"
import Gallery from "./components/Gallery"


import * as S from './styles'
import Modal, { ModalCard } from './components/Modal'

export type CardsJsonProps =  typeof cardsJson

function App() {
  const [filteredCards, setFilteredCards] = useState<CardsJsonProps>(cardsJson)
  const [selectedCard, setSelectedCard] =  useState<ModalCard | null>(null)
  

  const paramVerify = (value:number, param:number) =>{


    if(param ===0) {
      return true
    } 

    const compare =  value === param
    return compare
 
  }

  function cardsFilter (id:string|number){

    const filteredCards =  cardsJson.filter(card => (paramVerify((Number(card.tagId)), Number(id))))
    

    setFilteredCards(filteredCards)
    // const filteredCards =  cardsJson.filter(card => paramsVerify(card.tag, params) || paramsVerify(card.title, params))
    // setFilteredCards(filteredCards)
  }

  return (
    <>
      <Cabecalho/>
      <S.SectionBanner> 
        <AsideBar />
        <Banner text="A galeria mais completa de fotos do espaço!" />
      </S.SectionBanner>

      <S.SectionGallery>
        <Gallery filteredCards={filteredCards} cardsFilter={cardsFilter} setSelectedCard = {setSelectedCard}/>
      </S.SectionGallery>

      <Modal card={selectedCard} />
    </>
 
  )
}

export default App
