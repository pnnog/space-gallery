import { useState } from "react"

import SearchField from "../SearchField"
import {LiaSearchSolid} from 'react-icons/lia'
import {AiOutlineMenu} from 'react-icons/ai'
import Menu from "./Menu"

import * as S from './styles'


const Cabecalho = () => {
  

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return(
    <S.Wrapper>
      <S.HeaderContent> 
        <AiOutlineMenu onClick = {()=> setMenuIsOpen(true)} />
        <img src="/images/Logo.png" alt="Logo da página" />
      </S.HeaderContent>
      <SearchField placeholder="O que você procura?" icon={<LiaSearchSolid />} />

      <Menu isOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </S.Wrapper>
  )
}

export default Cabecalho