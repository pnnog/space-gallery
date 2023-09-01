import styled from "styled-components"

export const CardWrapper =  styled.li`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgb(0,0,0,0.7);
`

type imageProps = {
  image:string
}

export const ImageBox =  styled.picture<imageProps>`
  background-image: url(${({image}: imageProps)=> image });
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100%;
  height: 18rem;


  @media (min-width: 744px){
    height: 14rem;
  }

  @media (min-width: 1440px){
    height: 26rem;
  }



`

export const CardInfo =  styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #04244F;
  color: white;
  display: flex;
  justify-content: space-between;
  
`

export const Description = styled.div`
  > p {
    font-family: ${({theme})=> theme.font.family.bold};
  }

  > :nth-child(1){
    font-size: 1.6rem;
  }


  > :nth-child(2){
    font-size: 1.4rem;
  }
`

export const Buttons =  styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  >svg{
    cursor: pointer;
    transition: all .2s ease-in-out;
    width: 1.6rem;
    height: 1.6rem;
    
    &:hover{
      scale: 1.3;
    }
  }


  @media (min-width: 1440px){
    gap: 2.4rem;

    svg{
      width: 2.4rem;
      height: 2.4rem;
    }
  }


`
