import {AiOutlineExpand} from 'react-icons/ai'
import Button from '../../Button'
import FavButton from '../../FavButton'

import { CardProps } from './types'
import * as S from './style'

const Card = ({card, onToggleFav, onToggleModal, expanded = false }:CardProps) =>{
  
  return(
    <S.CardWrapper>
      <S.ImageBox $image = {card.imagePath}/>
      <S.CardInfo>
        <S.Description>
          <p> {card.title}</p>
          <span>{card.author}</span>
        </S.Description>

        <S.Buttons>
          <FavButton
            active ={card.isFav}
            onClick={()=> onToggleFav(card)} 
          />

          {!expanded && onToggleModal && <Button 
            icon={<AiOutlineExpand />} 
            onClick={()=> onToggleModal(card)} 
          />}
          
        </S.Buttons>
        
      </S.CardInfo>
    </S.CardWrapper>
  )
}

export default Card