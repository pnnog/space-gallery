import { ButtonHTMLAttributes } from "react"
import * as S from './styles'

type ButtonProps ={
  icon: React.ReactNode
  
} & ButtonHTMLAttributes<HTMLButtonElement>


const Button = ({icon, ...props}:ButtonProps) =>{
  return(
    <S.Button {...props}> {icon}</S.Button>
  )
}

export default Button