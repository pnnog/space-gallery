import { createGlobalStyle } from "styled-components";
import GandhiSansBold from './fonts/GandhiSans-Bold.otf'
import GandhiSansRegular from './fonts/GandhiSans-Regular.otf'


const GlobalStyles =  createGlobalStyle`

    ${({theme})=> `${theme.font.family.regular}`}

    @font-face {
      font-family: 'GandhiSansRegular';
      src: local(Gandhi Sans Regular), local(GandhiSansRegular), url(${GandhiSansRegular});
    }

    @font-face {
      font-family: 'GandhiSansBold';
      src: local(Gandhi Sans Bold), local(GandhiSansBold), url(${GandhiSansBold});
    }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height:100vh;
  }

  body{
    font-family: ${({theme}) => `${theme.font.family.regular}`};
    font-size: ${({theme}) => `${theme.font.sizes.base}`};
    width: 100%;
    min-height: 100vh;
  }
`

export default GlobalStyles