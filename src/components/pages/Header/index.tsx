import { HeaderTypes } from './types'
import { Content } from './styles'

export const Header = ({ text }: HeaderTypes) => {
  return (
    <Content>{text}</Content>
  )
}