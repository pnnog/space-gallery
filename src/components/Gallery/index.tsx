
import Heading from "./Heading"
import MostPopular from "./MostPopular"
import Tags from "./Tags"

import { CardsJsonProps } from "../../App"
import * as S from './styles'
import Card from "./Card"
import React, { SetStateAction } from "react"
import { ModalCard } from "../Modal"


type GalleryProps ={
  filteredCards: CardsJsonProps
  cardsFilter: (id: string | number)=> void
  setSelectedCard: React.Dispatch<SetStateAction<ModalCard | null>>
}

const Gallery = ({filteredCards = [], cardsFilter, setSelectedCard}:GalleryProps) =>{

  return(
    <>
      <Tags cardsFilter ={cardsFilter} />
      <S.GalleryContent>
        <S.CardsColumn>
          <Heading > Navegue pela galeria</Heading>
          <S.Cards>
            {filteredCards.map(card=> 
              <Card
                key={card.id} 
                author={card.author} 
                title={card.title} 
                imagePath={card.imagePath}
                setSelectedCard = {setSelectedCard}
              /> 
            )}
          </S.Cards>
        </S.CardsColumn>

        <S.MostPopularColumn>
          <Heading $centralized>Populares</Heading>
          <MostPopular $image="/images/cards/foto-1.png"/>
          <MostPopular $image="/images/cards/foto-2.png"/>
          <MostPopular $image="/images/cards/foto-3.png"/>
        </S.MostPopularColumn>
      </S.GalleryContent>
    </>
  )
}

export default Gallery