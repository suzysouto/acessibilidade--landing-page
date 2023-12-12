import { IntroductionTypes } from './types'
import { Content, ContentText, Title } from './styles'
import Container from '@/assets/components/common/Container'

const Introduction = ({ title, text }: IntroductionTypes) => {
  return (
    <Content>
      <Container>
        <Title>{title}</Title>
        <ContentText>{text}</ContentText>
      </Container>
    </Content>
  )
}

export default Introduction