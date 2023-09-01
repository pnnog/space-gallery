import { styled } from "styled-components"
import { HeadingProps } from "."

const modifiers ={
  centralized: ()=> ` 
    text-align: center;
  `
}

export const Heading = styled.h2< Pick<HeadingProps, '$centralized'>>`
    font-size: 2rem;
    margin-bottom: 3.2rem;
    color: ${({theme})=> theme.color.purple};
    ${({$centralized})=> !!$centralized && modifiers.centralized()}

    @media (min-width: 744px){
      font-size: 2.8rem;
      margin-bottom: 2.6rem;

    }

    @media (min-width: 1440px){
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
    }

`