import { Dispatch, SetStateAction } from 'react'
import {AiOutlineHeart, AiOutlineExpand} from 'react-icons/ai'
import { ModalCard } from '../../Modal'
import Button from '../../Button'

import * as S from './style'


export type CardProps = {
  imagePath:string
  title:string
  author:string,
  expanded?:boolean
  setSelectedCard?: Dispatch<SetStateAction<ModalCard>>
} 


const Card = ({imagePath, title, author, setSelectedCard, expanded = false}:CardProps) =>{


  const handleClick = () =>{
    !! setSelectedCard && setSelectedCard({title, author, imagePath})
  }
  

  return(
      <S.CardWrapper>
        <S.ImageBox $image = {imagePath}/>
        <S.CardInfo>
          <S.Description>
            <p> {title}</p>
            <span>{author}</span>
          </S.Description>

          <S.Buttons>
           <Button onClick={()=> console.log('oi')} icon={<AiOutlineHeart />} />
           {!expanded  && <Button icon={<AiOutlineExpand />} onClick={handleClick} />}
          </S.Buttons>
          
        </S.CardInfo>

      </S.CardWrapper>
  )
}

export default Card