import styled from "styled-components";
import Container from "../Container";

export const Wrapper = styled(Container).attrs({as: 'header'})`
  display: flex;
  flex-direction: column;
  padding-top : 3.2rem;
  padding-bottom : 3.2rem;
  gap: 4rem;


  @media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top : 6rem;
    padding-bottom : 6rem; 
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width:15.6rem
  }

  svg{
    color:${({theme})=> theme.color.lightGrey};
    font-size: 3.2rem;
    cursor: pointer;
  }

  @media (min-width: 744px){

    img{
      width: 21.2rem;
    }

    svg{
      display: none;
    }
  }


`
