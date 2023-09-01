import styled from "styled-components";

type MenuProps = {
  $isOpen: boolean
}

const modifiers  = {
  isOpen: ()=> `
    pointer-events:all;
    left: 0;
  `
}

export const Menu = styled.menu<MenuProps>`
  position: fixed;
  top: 0;
  left: -25.5rem;
  width: 25.5rem;
  pointer-events: none;
  z-index:10;

  transition: all .2s ease-in-out;
  background: ${({theme})=> theme.color.gradient};

  padding:4rem 2.4rem;
  box-shadow: 2px 2px 10px rgba(0,0,0,.3);
  
  ${({$isOpen})=> $isOpen && modifiers.isOpen()}

  svg{
    position: absolute;
    right: 2rem;
    top: 2rem;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    color: ${({theme})=> theme.color.lightGrey};
  }


`

