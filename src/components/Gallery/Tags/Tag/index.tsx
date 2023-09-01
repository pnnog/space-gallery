import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  $isActive?: boolean
} 


const Tag = ({children, $isActive = false}: TagProps) =>{
  return(
    <S.Tag $isActive = {$isActive }role='button'> {children} </S.Tag>
  )
}

export default Tag