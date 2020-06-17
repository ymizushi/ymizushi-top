import React from 'react';

import styled from 'styled-components';

import topImage from '../image/top_image.jpg'

function App() {
  const App = styled.div`
    margin: 1em 1em;
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
    display: block;
    float: right;
  `

  return (
    <Header>
      <HeaderTitle>
        ymizushi
      </HeaderTitle>
      <HeaderIcon className="fa fa-twitter fa-3x" />
      <HeaderIcon className="fa fa-facebook-square fa-3x" />
      <HeaderIcon className="fa fa-github fa-3x" />
      { HeaderMenu() }
    </Header>
  );
}

function HeaderMenu() {
  const Nav = styled.nav`
    clear: both;
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


function TopImage() {
  return (
    <>
      <img src={topImage} alt="top" width={600} height={400} />
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
