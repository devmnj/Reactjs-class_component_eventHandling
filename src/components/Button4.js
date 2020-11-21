import React, { Component } from 'react'


class Button3 extends Component {
   
  handleClick  () {
alert('Button3 Clicked')
  }
  render() {
    return (
      <div>
          {/* Arrow function- as class property */}
          <button onClick={this.handleClick.bind(this)}>Button3 - Binding in render</button>
      </div>
    )
  }
}

export default Button3



