import mobileBanner from './images/banner-mobile.png'
import tabletBanner from './images/banner-tablet.png'
import desktopBanner from './images/banner-desktop.png'

import * as S from './styles'

const srcs = {
  mobile:mobileBanner,
  tablet: tabletBanner,
  desktop: desktopBanner
}

type BannerProps ={
  text:string
}

const Banner = ({text}: BannerProps) =>{
  return(
    <S.Banner $src={srcs} role='img'>
      <S.Text> {text} </S.Text>
    </S.Banner>
  )
}

export default Banner