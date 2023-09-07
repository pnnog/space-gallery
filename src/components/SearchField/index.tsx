import { InputHTMLAttributes, ReactElement } from "react"

import * as S from './styles'

type SearchFieldProps = {
  icon?: ReactElement
  placeholder:string
} & InputHTMLAttributes<HTMLInputElement>


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