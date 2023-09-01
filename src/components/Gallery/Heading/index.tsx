import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  $centralized?: boolean

}

const Heading = ({children, $centralized = false}:HeadingProps) =>{
  return(
    <S.Heading $centralized = {$centralized} >{children}</S.Heading>
  )
}

export default Heading