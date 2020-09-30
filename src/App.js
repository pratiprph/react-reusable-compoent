import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  constructor(props){
    super(props)

    this.state = {
      bg:this.props.color,
      text:this.props.text,
      width:this.props.width,
      height:this.props.height
    }
    this.handleBG = this.handleBG.bind(this);
  }
  
  handleBG = ()=>{
   console.log(this.state.bg)
     this.setState({bg:!"red"})
     console.log(this.state.bg)
  }

  render(){
  return (
  <div 
   style={{backgroundColor:this.state.bg,width:this.state.width,height:this.state.height}}
   onClick={this.handleBG}
   >
  {this.state.text}---{this.state.text}</div>
  )
  }
}

const Button = (props)=><button style={{backgroundColor:props.color,borderRadius:props.radius,width:props.width,height:props.height}}>{props.text}</button>

const InputElement = (props)=><input style={{backgroundColor:props.color,borderRadius:props.radius}} placeholder={props.placeholder}/>

class App extends Component {
  

   render(){
     return (
       <div>
         <HelloWorld text="Pratip"  color="yellow"  width="200px" height="200px"/>
         
         <Button text="Pratip"  color="red" radius="20" width="50px" height="40px"/><br/><br/>
         <InputElement placeholder="may i know who is this.." radius="10%" color="red"/>
       </div>
     );
   }
  
}

export default App;
