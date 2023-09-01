import Tag from './Tag'
import * as S from './styles'

type TagsProps ={
  tags: Array<string>
}

export const Tags = ({tags}: TagsProps) =>{
  return(
    <S.TagsWrapper>
      <S.TagsTitle> Busque por tags: </S.TagsTitle>

      <S.Tags>
        {tags.map((tag)=> <Tag key={tag}> {tag} </Tag> )}
        <Tag $isActive>Todas</Tag>
      </S.Tags>

    </S.TagsWrapper>
    
  )
}

export default Tags