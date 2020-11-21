import React, { Component } from 'react'


class Button3 extends Component {
  constructor(props) {
    super(props)
    
    this.handleClick=this.handleClick.bind(this)
    
  }

  handleClick  () {
alert('Button3 Clicked')
  }
  render() {
    return (
      <div>
          {/* Arrow function- as class property */}
          <button onClick={this.handleClick}>Button3 - Binding in constructor</button>
      </div>
    )
  }
}

export default Button3



