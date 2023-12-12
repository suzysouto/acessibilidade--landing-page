import { Colors, Breakpoints, Typography, Theme } from './types'

///////////////////////////////////////////////////////////////////////////////
//  # Variables
//--------------------------------
//    Define all your global variables in this file
///////////////////////////////////////////////////////////////////////////////

// ## Colors
//---------------------------------
//    Colors variables are used with the syntax below
//    const EmotionComponent = styled.selector`
//      $rule:  ${colors.colorName};
//    `
//    not color names as it won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////

const light: Colors = {
  primary: '#8A6DEA',
  primaryLight: '#73728899',
  primaryDark: '#737288CC',

  secondary: '#D73A3D',

  tertiary: '#FF9900',

  quaternary: '#91e8ff',

  orange: '#F39208',
  red: '#D83A3E',
  purple: '#746BAF',

  background: '#009CDE',
  backgroundLight: '#0091BB',
  backgroundLighter: '#E9E9E9',
  backgroundDark: '#232323',
  backgroundModal: '#00000066',
  backgroundMenu: '#F1F1F1',
  backgroundCertification: '#F2F2F2',
  invertedText: '#FFFFFF',
  invertedTextLight: '#FEFAFA',

  light: '#e2e6e5',
  text: '#111111',
  textIntro: '#111111',
  textError: '#F90',
}

const dark: Colors = {
  primary: '#759215',
  primaryLight: '#8c8d7799',
  primaryDark: '#8c8d77CC',

  secondary: '#28c5c2',

  tertiary: '#0066ff',

  quaternary: '#6e1700',

  orange: '#0c6df7',
  red: '#27c5c1',
  purple: '#746BAF',

  background: '#080c0c',
  backgroundLight: '#070908',
  backgroundLighter: '#161616',
  backgroundDark: '#dcdcdc',
  backgroundModal: '#ffffff66',
  backgroundMenu: '#0e0e0e',
  backgroundCertification: '#090D0D',
  invertedText: '#000000',
  invertedTextLight: '#010505',

  light: '#1d191a',
  text: '#999999',
  textIntro: '#111111',
  textError: '#F90',
}

// # Media Queries breakpoints
//    MQ variables are defined as number and are used with the syntax below.
//
//      const EmotionComponent = styled.selector`
//        @media (min-width: ${props => props.theme.breakpoints.small}px) {
//          ...
//        }
//      `
//
//    Try to use abstract names and not something specific as mobile, as it
//    won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////
const breakpoints: Breakpoints = {
  small: 769,
  medium: 869,

  maxWidthDesk: '69.1875rem',
}

const typography: Typography = {
  h1: '700 1.75rem "Montserrat", sans-serif',
  h2: '700 1.5rem "Montserrat", sans-serif',
  h3: '700 1.25rem "Montserrat", sans-serif',
  h4: '700 1.125rem "Montserrat", sans-serif',
  paragraph: '300 0.875rem "Montserrat", sans-serif',

  h1Desk: '700 2.75rem "Montserrat", sans-serif',
  h2Desk: '700 2.25rem "Montserrat", sans-serif',
  h3Desk: '700 1.75rem "Montserrat", sans-serif',
  h4Desk: '700 1.5rem "Montserrat", sans-serif',
  paragraphDesk: '300 1.125rem "Montserrat", sans-serif',

  base: '100%',
  baseDesk: '100%',
  display: '"Montserrat", sans-serif',
  body: '"Montserrat", sans-serif',

  size1: '2.75rem',
  size2: '2.25rem',
  size3: '1.75rem',
  size4: '1.5rem',
  size5: '1.25rem',
  size6: '1rem',
  large: '1.25rem',
  medium: '1.125rem',
  normal: '1rem',
  small: '0.875rem',
}

const theme: Theme = { colors: light, breakpoints, typography }

export { dark, light }
export default theme
