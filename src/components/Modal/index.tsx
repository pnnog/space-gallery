import { CardsJsonProps } from "../../App"
import Card from "../Gallery/Card"
import * as S from './styles'

export type ModalCard =  Pick<CardsJsonProps[0], 'title'| 'imagePath' | 'author'>

type ModalProps = {
  card: ModalCard | null
}

const Modal = ({card}:ModalProps) =>{
  
  return(
    <>
      {!!card && (
        <S.ModalWrapper open ={!!card}>
          <S.ModalContent>
            <Card author={card.author} title={card.title} expanded imagePath={card.imagePath}/>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  )
}

export default Modal