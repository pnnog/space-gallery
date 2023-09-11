import styled from "styled-components";
import Container from "../Container";

export const FooterWrapper = styled.footer`
  margin-top: 2.4rem;
  box-shadow: ${({theme})=> theme.shadow.lg};
  background-color: ${({theme})=> theme.color.black };
`

export const FooterContent = styled(Container).attrs({as:'div'})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  
  @media (min-width: 744px){
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`


export const Paragraph =  styled.p`
  color: ${({theme})=> theme.color.lightGrey};
  font-size: 1.6rem;
  font-family: ${({theme})=> theme.font.family.alternative};
  font-weight: ${({theme})=> theme.font.normal};
`


export const SocialLinks =  styled.div`
  display: flex;
  gap: 4.3rem;

 
`


export const SocialLink = styled.a`
  text-decoration: none;
  color: ${({theme})=> theme.color.lightGrey};

  svg{
    width: 2.8rem;
    height: 2.8rem;
  }
  
  

`