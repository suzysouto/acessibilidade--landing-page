import { ContentPageTypes } from './types'
import { Content } from './styles'
import Container from '../../common/Container'

export const ContentPage = ({ text }: ContentPageTypes) => {
  return (
    <Content>
      <Container>
        {text}
      </Container>
    </Content>
  )
}