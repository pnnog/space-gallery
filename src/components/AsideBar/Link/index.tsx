import * as S from './styles'

type LinkProps = {
  text:string
  isActive?:boolean
  inativeIcon: string
  activeIcon:string
}

const Link = ({text, inativeIcon, activeIcon, isActive = false}:LinkProps) => {

  return(
    <S.Wrapper href="#">
      <S.Image
        src={isActive? activeIcon: inativeIcon}
        alt={`Ícone de ${text} ${isActive? 'ativo': 'inativo'}`} 
      />
      <S.Text $isActive = {isActive} >{text}</S.Text>
    </S.Wrapper>
  )
}

export default Link