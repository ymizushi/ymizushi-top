import React from 'react';

function HeaderMenu() {
  return (
    <div>
     { HeaderMenuItem("About") }
     { HeaderMenuItem("Works") }
     { HeaderMenuItem("Blog") }
     { HeaderMenuItem("Memo") }
    </div>
  )

}

function HeaderMenuItem(name: string) {
  return (
    <div>
      { name }
    </div>
  )

}

function Header() {
  return (
    <header className="App-header">
      <div>
        <p>
          ymizushi
        </p>
      </div>
      { HeaderMenu() }
    </header>
  );
}

function App() {
  return (
    <div className="App">
      { Header() }
    </div>
  );
}

export default App;
