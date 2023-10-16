import React, { Component } from 'react'

 class DidMount extends Component {
    constructor(props) {
      super(props)
      this.name=React.createRef();
    
      
    }
    componentDidMount(){
      this.name.current.focus();
    }
    
    
  render() {
    return (
      <div>
        <input type="text" ref={this.name}/>
        
      </div>
    )
  }
}
export default DidMount;
