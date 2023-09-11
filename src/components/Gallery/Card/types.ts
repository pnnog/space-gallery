

export type ICard = {
  id:string,
  title:string
  imagePath:string
  author:string,
  isFav?:boolean 
  tagId:number
}

export type CardProps = {
  card:ICard
  expanded?:boolean
  onToggleFav: (card:ICard)=>void
  onToggleModal?: (card:ICard) => void
  
} 

