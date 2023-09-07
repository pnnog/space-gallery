import styled from "styled-components"

export const GalleryWrapper =  styled.section`


`

export const GalleryContent =  styled.div`
  display: flex;
  flex-direction: column;
  gap:5.4rem;


  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;    
    gap:2.4rem;
  }


`

export const CardsColumn=  styled.section`

  @media (min-width: 550px) {
    flex: 1;
  }
`

export const MostPopularColumn=  styled.section`
  max-width: 100%;
  width: 100%;
  
  @media (min-width: 550px) {
    max-width: 16rem;
  }

`


export const Cards = styled.ul`
  display: grid;
  grid-gap: 2.4rem;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);


  @media (min-width: 744px){
   grid-template-columns: repeat(2, 1fr);
  }
` 

