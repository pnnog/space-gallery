import { Dispatch, SetStateAction } from "react"

import Heading from "./Heading"
import MostPopular from "./MostPopular"
import Tags from "./Tags"

import { CardsJsonProps, Filter } from "../../App"
import * as S from './styles'
import Card from "./Card"
import { ModalCard } from "../Modal"


type GalleryProps ={
  filteredCards: CardsJsonProps
  setFilter: Dispatch<SetStateAction<Filter>>
  setSelectedCard: Dispatch<SetStateAction<ModalCard>>
}

const Gallery = ({filteredCards = [], setFilter, setSelectedCard}:GalleryProps) =>{

  return(
    <>
      <Tags setFilter ={setFilter} />
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