import { ContentPageTypes } from './types'
import { Content } from './styles'

export const ContentPage = ({ text }: ContentPageTypes) => {
  return (
    <Content>{text}</Content>
  )
}