import { Dispatch, SetStateAction } from 'react'
import { Filter } from '../../../App'
import tags from './tags.json'

import * as S from './styles'


type TagsProps = {
  setFilter: Dispatch<SetStateAction<Filter>>

}

export const Tags = ({setFilter}:TagsProps) =>{

  return(
    <S.TagsWrapper>
      <S.TagsTitle> Busque por tags: </S.TagsTitle>

      <S.TagsContent>
        {tags.map((tag)=> <S.Tag 
          key={tag.id} 
          onClick={()=> setFilter((state)=>({...state, tagId:tag.id}))}>
          {tag.titulo} 
        </S.Tag> )}
      </S.TagsContent>
      
    </S.TagsWrapper>
  )
}

export default Tags