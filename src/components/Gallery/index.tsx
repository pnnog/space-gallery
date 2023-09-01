import cardsJson from './cards.json'
import { getNoRepeatedTags } from "../../utils/GetNoRepeatedTags"

import Heading from "./Heading"
import { Cards } from "./Cards"
import MostPopular from "./MostPopular"
import Tags from "./Tags"

import * as S from './styles'


const Gallery = () =>{

  const tags = getNoRepeatedTags(cardsJson)

  return(
    <>
      <Tags tags={tags} />
      <S.Gallery>
        <S.CardsColumn>
          <Heading > Navegue pela galeria</Heading>
          <Cards />
        </S.CardsColumn>

        <S.MostPopularColumn>
          <Heading $centralized>Populares</Heading>
          <MostPopular $image="/images/cards/space.png"/>
        </S.MostPopularColumn>
      </S.Gallery>
    </>
  )
}

export default Gallery