import Typography from 'typography'
import altonTheme from 'typography-theme-alton'


//https://coolors.co/bdc667-11151c-585563-33261d-ccdad1
const typography = new Typography(altonTheme)

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
  }

export default typography


export const rhythm = typography.rhythm
export const scale = typography.scale
