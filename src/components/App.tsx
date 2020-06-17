import React from 'react';

import styled from 'styled-components';

import topImage from '../image/top_image.jpg'

function App() {
  const App = styled.div`
    width: 50em;
    margin: 0.5em 3em;
  `
  return (
    <App >
      { Header() }
      { TopImage() }
      { Works() }
      { Footer() }
    </App>
  );
}

function Header() {
  const Header = styled.header`
  `
  const HeaderTitle = styled.span`
    display: block;
    font-size: 3em;
    float: left;
  `

  const HeaderIcon = styled.i`
    margin: 0.5em 0.1em 0.1em 0.1em;
    display: block;
    float: right;
  `

  return (
    <Header>
      <HeaderTitle>
        ymizushi
      </HeaderTitle>
      <HeaderIcon className="fa fa-twitter fa-2x" />
      <HeaderIcon className="fa fa-facebook-square fa-2x" />
      <HeaderIcon className="fa fa-github fa-2x" />
      { HeaderMenu() }
    </Header>
  );
}

function HeaderMenu() {
  const Nav = styled.nav`
    clear: both;
    float: right;
  `
  const MenuList = styled.ul`
    font-size: 1.5em;
    margin: 0.1em 0.5em 0.5em;
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


function TopImage() {
  const Img= styled.img`
    width: 45em;
    height: 30em;
    margin: 0 auto;
  `
  return (
    <Img src={topImage} alt="top" />
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
        <img alt={ w.title } src={ w.src} />
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

export default App;
