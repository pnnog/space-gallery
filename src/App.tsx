import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"
import Cabecalho from "./components/Cabecalho"
import Gallery from "./components/Gallery"

import * as S from './styles'





function App() {

  return (
    <>
      <Cabecalho />
      <S.SectionBanner> 
        <AsideBar />
        <Banner text="A galeria mais completa de fotos do espaço!" />
      </S.SectionBanner>

      <S.SectionGallery>
        <Gallery />
      </S.SectionGallery>
    </>
 
  )
}

export default App
