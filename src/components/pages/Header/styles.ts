import styled from '@emotion/styled'
import theme from '../../../styles/theme'

export const Content = styled.div`
  display: flex;
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
  color: ${theme.colors.primary};

  img {
    margin-right: 1rem;
  }
`
