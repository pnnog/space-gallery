import { ICard } from "../components/Gallery/Card/types"
import { Filter } from "../types"

const filterByTag = (value:number | undefined, param:number) => {

  return value? value === param : true
}

const filterBySearch = (search:string | undefined, cardTitle:string) =>{
  if(!search){
    return true
  }

  const regex =  new RegExp(search, 'i')
  return regex.test(cardTitle)
}


export const filterCards =  (allCards:ICard[], obj:Filter) => {
  const filteredCards = allCards.filter(card =>
     filterByTag(obj.tagId, card.tagId)
      &&
     filterBySearch(obj.search, card.title))

  return filteredCards 
}



