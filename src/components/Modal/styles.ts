
import { styled } from "styled-components"
import * as CardStyles from '../Gallery/Card/style'


export const modifiers = {
  isOpen:()=> `
    display:flex
  `
}

export const ModalWrapper =  styled.dialog`

  ${({open})=> !!open && modifiers.isOpen()};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.9);

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 13.9rem;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  width: 100%;
  height: 100%;
  max-width: 115rem;

  ${CardStyles.ImageBox}{
    height: 22rem;
  }


  @media (min-width: 744px) {
    top: 14.9rem;

    ${CardStyles.ImageBox}{
      height: 50rem;
    }
  }

  @media (min-width: 1440px) {
    top: 29.9rem;

    ${CardStyles.ImageBox}{
      height: 40rem;
    }
  }
 
`

