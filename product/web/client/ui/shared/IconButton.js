import React from 'react'
import radium from 'radium'
import FA from 'react-fontawesome'

const IconButton = ({ icon, label, ...props }) => (
  <button style={style.container} {...props}>
    <span style={{ marginRight: 8 }}>
      <FA name={icon} />
    </span>
    {label}
  </button>
)

let style = {
  container: {
    padding: 10,
    background: 'white',
    border: '1px solid rgb(222, 76, 76)',
    borderRadius: 21,
    transition: 'color 0.2s, background 0.2s',
    cursor: 'pointer',
    outline: 'none',
    color: 'rgb(222, 76, 76)',
    ':hover': {
      color: 'white',
      background: 'rgba(222, 76, 76, 0.9)',
    }
  }
}

export default radium(IconButton)
