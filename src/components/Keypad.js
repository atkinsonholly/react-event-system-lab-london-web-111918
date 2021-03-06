// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  showText = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
      <input
        type="password"
        onKeyUp={this.showText}
      />
      </div>
    )
  }

}

export default Keypad
