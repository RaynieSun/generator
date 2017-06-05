import React from 'react'

import './component.css'

export default class Hello extends React.Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      console.log('This is promise test')
      resolve()
    })
  }

  render() {
    return <h1>Hello world!</h1>
  }
}