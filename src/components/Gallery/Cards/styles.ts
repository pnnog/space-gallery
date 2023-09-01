import { styled } from "styled-components";

export const CardsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 2.4rem;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);


  @media (min-width: 744px){
   grid-template-columns: repeat(2, 1fr);
  }
`  