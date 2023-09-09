import { CardsJsonProps, Filter } from "../App"

const filterByTag = (value:number, param:number) => {
  if(value === 0 ){
    return true
  }

  const compare = value === param
  return compare
}

const filterBySearch = (search:string, cardTitle:string) =>{
  const regex =  new RegExp(search, 'i')
  return regex.test(cardTitle)
}



export const filterCards =  (allCards:CardsJsonProps, obj:Filter) => {
  const filteredCards = allCards.filter(card => filterByTag(obj.tagId, card.tagId) && filterBySearch(obj.search, card.title))
  return filteredCards 
}



