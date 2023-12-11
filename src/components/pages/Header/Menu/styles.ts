import styled from '@emotion/styled'
import theme from '../../../../styles/theme'

const small = (theme.breakpoints.small)

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (min-width: ${small}px) {
    display: flex;
    width: 30%;
  }
`

export const List = styled.ul`
  display: none;

  @media (min-width: ${small}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const ListItems = styled.li`
  list-style: none;
  font-size: 1.3rem;
  font-weight: 700;

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`

export const ListItemsIcon = styled.image`
  color: ${theme.colors.primary};
  margin-right: 1rem;
`

export const ListItemsText = styled.span`
  color: ${theme.colors.primary};
`

export const NavbarMobile = styled.div`
  display: flex; 
  justify-content: flex-end;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: ${small}px) {
    display: none;
  }
`
