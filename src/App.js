import React from "react"

import Title from "./components/Title"
import Content from "./components/Content"
import Button from "./components/Button"

import "./App.css"

class App extends React.Component {
  handleClick() {
    console.log("hello")
  }

  handleChange(event) {
    console.log(event.target.value)
  }
 
  render() {
    return (
      <div>
        <Title title="Home" color="#0000ff" />
        <Content content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Button label="Change title" onClick={this.handleClick} />
        <br />
        <input
          placeholder="Type text"
          type="range"
          onChange={this.handleChange}
          min={100}
          max={999}
        />
      </div>
    )
  }
}

export default App
