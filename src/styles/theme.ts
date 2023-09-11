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
      bold:'GandhiSansBold',
      alternative: "'Montserrat', 'sans-serif'"
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
  },
  
  shadow:{
    md:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg:'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  }
} as const

export default theme 