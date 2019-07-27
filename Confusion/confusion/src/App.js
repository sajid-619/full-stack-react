import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

/*
class App extends React.Component {
  render () {
    return(
    <Restaurant/>
  );
}
    
  }
  */



export default App;
