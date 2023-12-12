import styled from '@emotion/styled'
import theme from '../../../styles/theme'

export const Content = styled.header`
  background-color: ${theme.colors.background};
  color: ${theme.colors.invertedText};
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0;
`

export const LogoMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.invertedText};

  img {
    margin-right: 1rem;
  }
`
