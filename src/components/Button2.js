import React, { Component } from "react";

class Button2 extends Component {
  handleClick = () => {
    alert("Button2 Clicked");
  };
  render() {
    return (
      <div>
        {/* Arrow function- as class property */}
        <button onClick={this.handleClick}>Button2 - Arrow Fun - class property</button>
      </div>
    );
  }
}

export default Button2;
