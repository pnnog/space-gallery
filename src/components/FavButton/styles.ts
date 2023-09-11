import { styled } from "styled-components"

export const FavButton = styled.button` 

  border: none;
  background-color: transparent;
  width: 1.6rem;
  height: 1.6rem;

  > svg {
      color: ${({theme})=> theme.color.lightGrey};
      cursor: pointer;
      transition: all .2s ease-in-out;
      width: 100%;
      height: 100%;
      
      &:hover{
        scale: 1.3;
      }
    }


  @media (min-width: 1440px){
    width: 2.4rem;
    height: 2.4rem;
  }
`
