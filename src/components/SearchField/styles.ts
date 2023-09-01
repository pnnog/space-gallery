import { styled } from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #7B78E5 ;
  border-radius: 1rem;
  width: 100%;
  gap: 2rem;
  padding: 1.2rem 1.6rem;

  @media (min-width: 744px) {
    max-width:42rem;
  }

  svg{
    color: #7B78E5;
    width: 2.2rem;
    height: 2.2rem;
  }
`

export const Input = styled.input`
    border-radius: 1rem;
    flex: 1;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    height: 2rem;
    padding: 0 .2rem;

    &::placeholder{
      color: #afafaf;
    }

    &:focus{
      outline: none;
    }
`
