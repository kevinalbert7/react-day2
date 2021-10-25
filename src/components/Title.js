import React from 'react'

class Title extends React.Component {
  render() {
    console.log(this.props)

    return (
      <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
    )
  }
}

export default Title
