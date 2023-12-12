import styled from '@emotion/styled'

const small = 769

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  @media (min-width: ${small}px) {
    flex-direction: row;
    margin: 0;
  }
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0 1rem;

  @media (min-width: ${small}px) {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
  }
`

export const ContentText = styled.span`
  font-size: 0.875rem;

  @media (min-width: ${small}px) {
    font-size: 1rem;
  }
`
