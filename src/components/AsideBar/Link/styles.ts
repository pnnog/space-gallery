
import { styled } from "styled-components"
import { DefaultTheme } from "styled-components/dist/types"


const modifiers = {
  isActive: (theme:DefaultTheme)=>`
    color: ${theme.color.purple};
    font-family:${theme.font.family.bold};
  `,

  isInative: (theme: DefaultTheme)=>`
    color: ${theme.color.lightGrey};
    font-family:${theme.font.family.regular};
  `
}


export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  text-decoration: none;
`

export const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`

type TextProps = {
  $isActive: boolean
}

export const Text = styled.p<TextProps>`
  ${({theme, $isActive})=>`
    ${!!$isActive && modifiers.isActive(theme)};
    ${!$isActive && modifiers.isInative(theme)};
    font-size:${theme.font.sizes.xlg};
    font-weight: ${theme.font.light};
  `}
`
