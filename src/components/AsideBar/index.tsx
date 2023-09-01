import Link from './Link'

import * as S from './styles'


const AsideBar = () =>{
  
  return(
    <S.Wrapper>
      <nav>
        <S.List>
          <Link text='Início' inativeIcon='/icons/home-inativo.png' activeIcon='/icons/home-ativo.png' isActive />
          <Link text='Mais vistas' inativeIcon='/icons/mais-vistas-inativo.png' activeIcon='/icons/mais-vistas-ativo.png'/>
          <Link text='Mais curtidas' inativeIcon='/icons/mais-curtidas-inativo.png' activeIcon='/icons/mais-curtidas-ativo.png'  />
          <Link text='Novas' inativeIcon='/icons/novas-inativo.png' activeIcon='/icons/novas-ativo.png' />
          <Link text='Surpreenda-me' inativeIcon='/icons/surpreendame-inativo.png' activeIcon='/icons/surpreendame-ativo.png' />
        </S.List>
      </nav>
    </S.Wrapper>
  )
}

export default AsideBar