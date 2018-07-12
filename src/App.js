import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';

class App extends Component {
  changeText = (event) => {
    const divItems = document.getElementsByTagName("div");
    const e = event.target;
    //console.log(e);
    for ( let i = 0; i < divItems.length; i++ ){ 
        if ( divItems[i] == e ){
          divItems[i-1].innerHTML = "X";
          divItems[i].innerHTML = "X";
          divItems[i+1].innerHTML = "X";
        }
      }
    }

  render() {
    return (
      <div onClick={this.changeText}>
        <Main></Main>
      </div>
    );
  }
}

export default App;
