import { styled } from "styled-components";
import Container from "./components/Container";
import * as AsideStyles from './components/AsideBar/styles'

export const SectionBanner = styled(Container).attrs({as: 'section'})`
  display: flex;
  gap: 5.8rem;
  margin-bottom: 3.2rem;

  ${AsideStyles.Wrapper}{
    display: none;
  
  }
 
  @media (min-width: 744px){
    margin-bottom: 4.8rem;


    ${AsideStyles.Wrapper}{
      display: block;
    }
      
  }


  @media (min-width: 1440px){
    margin-bottom: 5.6rem;
  }
`

export const SectionGallery = styled(Container).attrs({as:'section'})`

@media (min-width: 1440px){
  padding-left: calc(21.2rem + 5.8rem + 2.4rem);
  padding-right: 2.4rem;
}
  
`
