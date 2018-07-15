import React, { Component } from 'react';
import { connect } from 'react-redux'
class Main extends Component {
  // validPosition = pos => pos>=0 && pos<this.props.characters.length
  // handleClick = (index)=>{
  //   const newChars = [...this.props.characters];
  //   for(let i=-1;i<=1;i++){
  //     const pos = i+index;
  //     if(this.validPosition(pos)){
  //       newChars[pos]^=1;
  //     }
  //   }
  //   this.setState({characters :newChars })
  // }
  render() {
    return (
      <div className="container">
        {this.props.characters.map((v,i)=>{
          return (
          <div key = {i} onClick = {()=> this.props.handleClick(i)}  className="box">{v?'X':'O'}</div>
        )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state,prop)=>{
  return {
    characters: state.characters
  }
}
const mapDispatchToProps = (dispatch, prop)=>{
  return {
    handleClick : (index)=>dispatch({type:"CLICK",payload:{index}})
  }
}
const MainWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainWithRedux;
