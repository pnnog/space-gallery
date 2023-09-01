import * as S from './styles'

export type PopularProps = {
  $image: string
}

const MostPopular = ({$image}:PopularProps) =>{
  return(
    <S.MostPopularWrapper>
      <S.MostPopular $image = {$image}></S.MostPopular>
    </S.MostPopularWrapper>
  )
}

export default MostPopular