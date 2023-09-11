import { useEffect, useState } from 'react'
import jsonCards from "./json/cards.json"

import { filterCards } from './utils/filterCards'

import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"
import Cabecalho from "./components/Cabecalho"
import Gallery from "./components/Gallery"
import Modal from './components/Modal'

import { ICard } from './components/Gallery/Card/types'
import { Filter } from './types'
import * as S from './styles'
import Footer from './components/Footer'

function App() {
  const [filteredCards, setFilteredCards] = useState<ICard[]>(jsonCards)
  const [modalCard, setModalCard] =  useState<ICard | null>(null)
  const [filter, setFilter] = useState<Filter>({})

  const onToggleFav = (card:ICard):void =>{
    const updatedCards = filteredCards.map((filteredCard)=>{

      filteredCard.id === card.id?
        filteredCard.isFav = !filteredCard.isFav
        :
        filteredCard.isFav = !!filteredCard.isFav

      return filteredCard
    }) 

    setFilteredCards(updatedCards)

  }

  const onToggleModal = (card:ICard | null):void =>{
    card ? setModalCard(card) : setModalCard(null)
  }

  const onChangeFilter = (newFilter: Filter) =>{
    setFilter(oldFilter=> ({...oldFilter, ...newFilter }))
  }


  //aplica filtro e atualiza lista de elementos com elementos filtrados
  useEffect(()=>{
    const cards = filterCards(jsonCards, filter)
    setFilteredCards(cards)
  }, [filter])

  return (
    <>
      <Cabecalho onChangeFilter = {onChangeFilter}/>
      <S.SectionBanner> 
        <AsideBar />
        <Banner text="A galeria mais completa de fotos do espaço!" />
      </S.SectionBanner>

      <S.SectionGallery>
        <Gallery
          filter = {filter}
          filteredCards={filteredCards} 
          onChangeFilter = {onChangeFilter}
          onToggleFav = {onToggleFav}
          onToggleModal = {onToggleModal}
        />
      </S.SectionGallery>

      <Modal 
        modalCard={modalCard}
        onToggleFav={onToggleFav}
        onToggleModal={onToggleModal}
      />
      
      <Footer />
    </>
  
  )
}

export default App
