import tags from './tags.json'
import Tag from './Tag'

import { TagsProps } from './types'
import * as S from './styles'



export const Tags = ({filter, onChangeFilter}:TagsProps) =>{

  const checkIsActive = (id:number):boolean =>{
    if(!filter.tagId && id === 0){
      return true
    }

    return filter.tagId === id
  }

  return(
    <S.TagsWrapper>
      <S.TagsTitle> Busque por tags: </S.TagsTitle>

      <S.TagsContent>
        {tags.map((tag)=> <Tag key={tag.id} onClick={() => onChangeFilter({tagId:tag.id})} $isActive={checkIsActive(tag.id)}> {tag.titulo}</Tag>)}
      </S.TagsContent>
      
    </S.TagsWrapper>
  )
}

export default Tags