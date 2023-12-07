import { FooterTypes } from './types'
import { Content } from './styles'

export const Footer = ({ text }: FooterTypes) => {
  return (
    <Content>{text}</Content>
  )
}