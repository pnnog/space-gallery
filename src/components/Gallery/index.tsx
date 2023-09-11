
import Heading from "./Heading"
import MostPopular from "./MostPopular"
import Tags from "./Tags"

import * as S from './styles'
import { ICard } from "./Card/types"
import Card from "./Card"
import { Filter } from "../../types"


type GalleryProps ={
  filter:Filter
  filteredCards: ICard[]
  onToggleFav:(card:ICard) => void
  onToggleModal: (card:ICard) => void
  onChangeFilter: (filter:Filter)=> void
}

const Gallery = ({ filter, onChangeFilter, onToggleFav, onToggleModal, filteredCards = [], }:GalleryProps) =>{

  return(
    <>
      <Tags onChangeFilter ={onChangeFilter} filter = {filter} />
      <S.GalleryContent>
        <S.CardsColumn>
          <Heading > Navegue pela galeria</Heading>
          <S.Cards>
            {filteredCards.map(card=> 
              <Card
                key={card.id} 
                card={card}
                onToggleFav={onToggleFav}
                onToggleModal = {onToggleModal}
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