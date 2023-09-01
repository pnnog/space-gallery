import { styled } from "styled-components";

type BannerProps = {
  $src: {
    mobile:string,
    tablet: string,
    desktop: string
  }
}


export const Banner = styled.div<BannerProps>`
  position: relative;
  background-image: url(${({$src})=> $src.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center right;
  width: 100%;
  height: 14rem;
  background-color: transparent;
  border-radius: 2rem;
  z-index: 0;

  @media (min-width: 744px){
    background-image: url(${({$src})=> $src.tablet});
    height: 27rem;
  }

  @media (min-width: 1440px){
    background-image: url(${({$src})=> $src.desktop});
    height: 33rem;
  }

`

export const Text =  styled.h3`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 2.4rem;
  max-width:100%;

  font-size:2.4rem;
  color: ${({theme})=>theme.color.lightGrey};


  @media (min-width: 744px){
    font-size: 3.2rem;
    max-width:26rem;

  }

  @media (min-width: 1440px){
    max-width:30rem;
    font-size: 4rem;
    left: 6.4rem;
  }
`