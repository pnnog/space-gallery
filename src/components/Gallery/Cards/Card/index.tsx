import * as S from './style'
import {AiOutlineHeart, AiOutlineExpand} from 'react-icons/ai'


type CardProps = {
  image:string
  title:string
  author:string
} 

const Card = ({image, title, author}:CardProps) =>{
  return(
      <S.CardWrapper>
        <S.ImageBox image = {image}/>
        <S.CardInfo>
          <S.Description>
            <p> {title}</p>
            <span>{author}</span>
          </S.Description>

          <S.Buttons>
           <AiOutlineHeart />
           <AiOutlineExpand/>
          </S.Buttons>
          
        </S.CardInfo>

      </S.CardWrapper>
  )
}

export default Card