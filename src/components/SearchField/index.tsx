import { ReactElement } from "react"

import * as S from './styles'

interface SearchFieldProps{
  icon?: ReactElement
  placeholder:string
}


const SearchField =  ({icon, placeholder}:SearchFieldProps) => 
  {
    return(
      <S.Wrapper>
        <S.Input type="text" placeholder={placeholder} /> 
        {icon && icon}
      </S.Wrapper>
    )
  }

export default SearchField