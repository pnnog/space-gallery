import {AiOutlineClose as CloseIcon} from 'react-icons/ai'

import Button from "../Button"
import Card from "../Gallery/Card"

import { ModalProps } from './type'
import * as S from './styles'



const Modal = ({modalCard, onToggleFav, onToggleModal}:ModalProps) =>{
  
  return(
    <>
      {!!modalCard && (
        <S.Dialog open ={!!modalCard} >
          <S.DialogContent>
            <S.CloseButtonWrapper> 
              <Button  icon={<CloseIcon />} onClick={ () => onToggleModal(null)} />
            </S.CloseButtonWrapper>
            <Card
             expanded={true}
             card={modalCard}
             onToggleFav={()=> onToggleFav(modalCard)}
            />
          </S.DialogContent>
        </S.Dialog>
      )}
    </>
  )
}

export default Modal