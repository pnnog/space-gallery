import tags from './tags.json'
import * as S from './styles'


type TagsProps = {
  cardsFilter:(id:string|number)=>void
}

export const Tags = ({cardsFilter}:TagsProps) =>{

  const handleClick = (tagId:number) =>{
    cardsFilter(tagId)
  }
  
  return(
    <S.TagsWrapper>
      <S.TagsTitle> Busque por tags: </S.TagsTitle>

      <S.TagsContent>
        {tags.map((tag)=> <S.Tag key={tag.id} onClick={()=> handleClick(tag.id)} > {tag.titulo} </S.Tag> )}
      </S.TagsContent>
      
    </S.TagsWrapper>
  )
}

export default Tags