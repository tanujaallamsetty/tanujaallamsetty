import React, { Component } from 'react'

export default class StatesC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        name:"operation",
         
      }
    }
    handleIncrement=()=>{
        // this.state.count=this.state.count+1
        // console.log(this.state.count)
        this.setState({
            count:this.state.count+1,
            name:"Incrementing"
        });
    }
    
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.handleIncrement}>Click</button> */}
        {/* <button onclick={()=>this.handleIncrement()}>Click</button> */}
        <button onClick={this.handleIncrement}>Increment</button>
        
      </div>
    )
  }
}

