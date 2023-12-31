import styled from '@emotion/styled'

const backgroundColor = '#009CDE'
const invertedText = '#FFFFFF'

const small = 769

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
    color: ${invertedText};
    cursor: pointer;
  }
`

export const ListItemsIcon = styled.image`
  color: ${invertedText};
  margin-right: 1rem;
`

export const ListItemsText = styled.span`
  color: ${invertedText};
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
