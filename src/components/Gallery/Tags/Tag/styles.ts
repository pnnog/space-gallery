import { styled } from "styled-components"
import { DefaultTheme } from "styled-components/dist/types"
import { TagProps } from "./types"



const modifiers = {
  isActive: (theme:DefaultTheme)=>`
    border-color: ${theme.color.purple};
  `
}

export const Tag = styled.li<Pick<TagProps, '$isActive'>>`
  padding: .6rem .4rem;
  min-width: 8rem;
  text-align: center;
  border-radius: 1rem;
  background: rgba(217, 217, 217, 0.30);
  font-size: 1.6rem;
  color: #FFFFFF;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border: .2rem solid transparent;


  ${({$isActive, theme})=> !!$isActive && modifiers.isActive(theme)};


  &:hover{
    transform: scale(1.1);
    border-color: ${({theme})=>theme.color.purple};

  }

  @media (min-width: 744px){
    padding: 1rem .4rem;
  }
`
