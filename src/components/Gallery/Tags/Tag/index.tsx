import { TagProps } from './types'
import * as S from './styles'


const Tag = ({children, $isActive = false, onClick}: TagProps) =>{

  return(
    <S.Tag onClick={onClick} $isActive = {$isActive } role='button'> {children} </S.Tag>
  )
}

export default Tag