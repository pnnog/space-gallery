import { SetStateAction } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import * as S from './styles'
import AsideBar from '../../AsideBar'

export type MenuProps ={
  isOpen: boolean
  setMenuIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const Menu = ({isOpen, setMenuIsOpen}: MenuProps) =>{
  return(
    <S.Menu $isOpen ={isOpen}>
      <AiOutlineClose onClick = {()=> setMenuIsOpen(false)}/>
      <AsideBar />
    </S.Menu>
  )
}

export default Menu