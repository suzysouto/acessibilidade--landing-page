import { HeaderTypes } from './types'
import { Content, LogoMenuWrapper, LogoWrapper } from './styles'
import Image from 'next/image'

import acessibilityIcon from '../../../../public/assets/acessibility--icon.png'
import Menu from './Menu'
import Container from '../../common/Container'

export const Header = ({ text }: HeaderTypes) => {
  return (
    <Content>
      <Container>
        <LogoMenuWrapper>
          <LogoWrapper>
            <Image 
              src={acessibilityIcon} 
              alt={'ícone de acessibilidade'} 
              width={40}
            />
            {text}
          </LogoWrapper>
          <Menu />
        </LogoMenuWrapper>
      </Container>
    </Content>
  )
}