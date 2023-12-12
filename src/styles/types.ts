export interface Colors {
  primary: string
  primaryLight: string
  primaryDark: string
  secondary: string
  tertiary: string
  quaternary: string
  orange: string
  red: string
  purple: string
  background: string
  backgroundLight: string
  backgroundLighter: string
  backgroundDark: string
  backgroundModal: string
  backgroundMenu: string
  backgroundCertification: string
  invertedText: string
  invertedTextLight: string
  light: string
  text: string
  textIntro: string
  textError: string
}

export interface Breakpoints {
  small: number
  medium: number

  maxWidthDesk: string
}

export interface Typography {
  h1: string
  h2: string
  h3: string
  h4: string
  paragraph: string

  h1Desk: string
  h2Desk: string
  h3Desk: string
  h4Desk: string
  paragraphDesk: string

  base: string
  baseDesk: string
  display: string
  body: string

  size1: string
  size2: string
  size3: string
  size4: string
  size5: string
  size6: string

  large: string
  medium: string
  normal: string
  small: string
}

export interface Theme {
  colors: Colors
  breakpoints: Breakpoints
  typography: Typography
}
