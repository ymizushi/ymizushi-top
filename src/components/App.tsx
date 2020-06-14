import React from 'react';

import styled from 'styled-components';

import topImage from '../image/top_image.jpg'

function HeaderMenu() {
  const Nav = styled.nav`

  `
  const MenuList = styled.ul`
    font-size: 1.5em;
  `
  return (
    <Nav>
      <MenuList>
        { HeaderMenuItem("About") }
        { HeaderMenuItem("Works") }
        { HeaderMenuItem("Blog") }
        { HeaderMenuItem("Memo") }
      </MenuList>
    </Nav>
  )

}

function HeaderMenuItem(name: string) {
  const ListItem= styled.li`
    display: inline;
    margin: 0.5em;
  `
  return (
    <ListItem>
      { name }
    </ListItem>
  )

}

function Header() {
  const Header = styled.header`
  `
  const HeaderTitle = styled.span`
    font-size: 3em;
  `

  const HeaderIcon = styled.i`
    margin-left: 10em;
    display: inline-block;
    margin-right: 10em;
  `

  return (
    <Header>
      <HeaderTitle>
        ymizushi
      </HeaderTitle>
      <HeaderIcon className="fa fa-home"/>
      { HeaderMenu() }
    </Header>
  );
}

function TopImage() {
  return (
    <>
      <img src={topImage} width={600} height={400} />
    </>
  );
}


function Works() {
  const works = [{
    src: "",
    title: "dtt"
  }];
  const work = (w: {src: string, title: string }) => {
    return (
      <div>
        <img src={ w.src} />
        <div>{ w.title }</div>
      </div>
    )
  }

  return (
    <div>
      { works.map(w => work(w)) }
    </div>
  )
}

function Footer() {
  const Footer = styled.div`
  `
  return (
    <Footer>
      ©ymizushi
    </Footer>
  )
}

function App() {
  const App = styled.div`
  `
  return (
    <App className="App">
      { Header() }
      { TopImage() }
      { Works() }
      { Footer() }
    </App>
  );
}

export default App;
