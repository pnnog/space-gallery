import { styled } from "styled-components"
import { PopularProps } from "."



export const MostPopularWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  width: 100%;
  list-style: none;

`

export const MostPopular =  styled.li<PopularProps>`
  background-image: url(${({$image})=>$image });
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius:2rem;
  height: 16rem;
`

