import { LiHTMLAttributes } from 'react'
import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  $isActive?: boolean,

} & LiHTMLAttributes<HTMLLIElement>






const Tag = ({children, $isActive = false, onClick}: TagProps) =>{

  return(
    <S.Tag onClick={onClick} $isActive = {$isActive } role='button'> {children} </S.Tag>
  )
}

export default Tag