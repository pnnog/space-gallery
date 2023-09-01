const theme = {
  color:{
    gradient:'linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%)',
    grey: '#94A3B8',
    lightGrey:'#D9D9D9',
    purple:'#7B78E5',
    black:'#001634',
  },

  rounded:{
    md:'.8rem',
    lg:'2rem',
    full:'50%'
  },

  font:{
    family:{
      regular:'GandhiSansRegular',
      bold:'GandhiSansBold'
    },
    light:'400',
    normal:'500',
    semibold:'600',
    bold:'700',
    sizes:{
      sm:'1.2rem',
      base:'1.6rem',
      lg:'2rem',
      xlg:'2.2rem',
      xxlg:'2.4rem'
    } 
  }   
} as const

export default theme 