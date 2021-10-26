import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import Title from "./components/Title"
import Button from "react-bootstrap/Button"


class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      number: 6,
      name: "Eloi"
    }
  }

  handlePlusClick = () => {
    if (this.state.number < 10) {
      this.setState({ number: this.state.number + 1 })
    }
  }


  handleMinusClick = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 })
    } 
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    console.log(this.state.number)
  
    return (
      <>
        <Title color="red" title="hello" />
        <h1>{this.state.number}</h1>
        {/* <Button onClick={this.handleMinusClick}>-</Button> */}
        {/* <Button onClick={this.handlePlusClick}>+</Button> */}
        <Button variant="danger">-</Button>
        <Button variant="success">+</Button>
        <br />
        <h1>{this.state.name}</h1>
        <input
          type="text"
          placeholder="tappez votre nom"
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default App
