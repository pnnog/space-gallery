import {AiOutlineClose as CloseIcon} from 'react-icons/ai'
import { Dispatch, SetStateAction } from "react"

import { CardsJsonProps } from "../../App"
import Button from "../Button"
import Card from "../Gallery/Card"

import * as S from './styles'


export type ModalCard =  Pick<CardsJsonProps[0], 'title'| 'imagePath' | 'author'> | null

type ModalProps = {
  card: ModalCard 
  setSelectedCard: Dispatch<SetStateAction<ModalCard>>
}

const Modal = ({card, setSelectedCard}:ModalProps) =>{

  
  return(
    <>
      {!!card && (
        <S.Dialog open ={!!card} >
          <S.DialogContent>
            <S.CloseButtonWrapper> 
              <Button  icon={<CloseIcon />} onClick={ () => setSelectedCard(null)}/>
            </S.CloseButtonWrapper>
            <Card author={card.author} title={card.title} expanded imagePath={card.imagePath}/>
          </S.DialogContent>
        </S.Dialog>
      )}
    </>
  )
}

export default Modal