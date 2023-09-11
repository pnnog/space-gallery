import {AiOutlineHeart as UnfavIcon, AiFillHeart as FavIcon} from 'react-icons/ai'
import * as S from './styles'
import { FavButtonProps } from './types'



const FavButton = ({active = false, onClick}:FavButtonProps) =>{

  return(

    <S.FavButton onClick={onClick}> 
      {active? <FavIcon/> : <UnfavIcon/>}
    </S.FavButton>

    
  )
}


export default FavButton
