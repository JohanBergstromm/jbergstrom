import React, { Component } from 'react';
import Menu from './menu';
import Footer from './footer';

let test = "Walla";

class App extends Component {
  render() {
    return (
      <div>
      	<Menu test={test}/>
        <h1>My React App!</h1>
      	<Footer />
      </div>
    );
  }
}

export default App;
