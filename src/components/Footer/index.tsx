import { LiaFacebook, LiaInstagram, LiaTwitter } from 'react-icons/lia'
import * as S from './styles'
const Footer = () =>{
  return(
    <S.FooterWrapper> 
      <S.FooterContent>

      <S.Paragraph>Desenvolvido por pnnog.</S.Paragraph>

      <S.SocialLinks >
        <S.SocialLink href='http://www.google.com.br' target='_blank'>
          <LiaFacebook />
        </S.SocialLink>
        
        <S.SocialLink href='http://www.google.com.br' target='_blank'>
          <LiaTwitter />
        </S.SocialLink>

        <S.SocialLink href='http://www.google.com.br' target='_blank'>
          <LiaInstagram />
        </S.SocialLink>
     </S.SocialLinks>

     </S.FooterContent>
    </S.FooterWrapper>
    
  )
}

export default Footer