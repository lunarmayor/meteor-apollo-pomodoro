import React, { Component } from 'react'

const padding = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xlg: 40,
}
const mapToPadding = (paddingSize) => {
 let size = padding[paddingSize]
 return size ? { padding: size } : {}
}
const handlePadding = Wrapped => class HandlePadding extends React.Component {
  render() {
    let paddingStyle = mapToPadding(this.props.padding)

    return (
      <Wrapped
        style={Object.assign({}, paddingStyle, this.props.style)}
        {...this.props}
      />
    )
  }
}

export default handlePadding
