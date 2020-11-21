import React, { Component } from 'react'


class Button1 extends Component {



  render() {
    return (
      <div>
          {/* Arrow function in render */}
          <button onClick={()=> alert('Button1 clicked')}>Button1 - Arrow Fun in render</button>
      </div>
    )
  }
}

export default Button1



