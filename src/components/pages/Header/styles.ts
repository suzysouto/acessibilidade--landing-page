import styled from '@emotion/styled'

const backgroundLightColor = '#0091BB'
const invertedText = '#FFFFFF'

export const Content = styled.header`
  background-color: ${backgroundLightColor};
  color: ${invertedText};
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
  color: ${invertedText};

  img {
    margin-right: 1rem;
  }
`
