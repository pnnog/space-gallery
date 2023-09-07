import { cardsJsonProps } from "../App"


export const getNoRepeatedTags = (cards: cardsJsonProps)=>{
  const cardsTags =  cards.map((card)=> card.tag)

  const noRepeteadTags = cardsTags.filter((tag, index )=>{
    return cardsTags.indexOf(tag) === index 
  })

  return noRepeteadTags
}

