import { styled } from "styled-components";

export const TagsWrapper =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 3.2rem;

  @media (min-width:744px){
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
  }

`

export const TagsTitle=  styled.h2`
  text-align: center;
  color: ${({theme})=> theme.color.lightGrey};
  font-size: 2rem;
  font-weight: 400;

  @media (min-width:744px){
    font-size: 2.4rem;
  }
`

export const Tags =  styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 1.4rem;
  justify-content: center;
  list-style: none;

  @media (min-width: 744px){
    justify-content: flex-start;
  }
`