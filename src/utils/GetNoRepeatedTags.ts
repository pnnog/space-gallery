import { ICards } from "../interfaces/cards"


export const getNoRepeatedTags = (cards: ICards[])=>{
  const cardsTags =  cards.map((card)=> card.tag)

  const noRepeteadTags = cardsTags.filter((tag, index )=>{
    return cardsTags.indexOf(tag) === index 
  })

  return noRepeteadTags
}

