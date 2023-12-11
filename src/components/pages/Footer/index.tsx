import { FooterTypes } from './types'
import { Content } from './styles'
import Container from '../../common/Container'

export const Footer = ({ text }: FooterTypes) => {
  return (
    <Content>
      <Container>
        {text}
      </Container>
    </Content>
  )
}