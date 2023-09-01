import styled from "styled-components"

export const GalleryWrapper =  styled.section`


`

export const Gallery =  styled.div`
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


