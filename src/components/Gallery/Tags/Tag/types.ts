import { LiHTMLAttributes } from 'react'

export type TagProps = {
  children: React.ReactNode
  $isActive?: boolean,

} & LiHTMLAttributes<HTMLLIElement>
