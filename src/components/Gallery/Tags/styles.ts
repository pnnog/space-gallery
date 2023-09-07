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

export const TagsContent =  styled.ul`
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



export const Tag =  styled.li `
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

  &:hover{
    transform: scale(1.1);
    border-color: ${({theme})=>theme.color.purple};

  }

  @media (min-width: 744px){
    padding: 1rem .4rem;
  }

`