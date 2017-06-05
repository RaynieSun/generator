import { render } from 'react-dom'
import React from 'react'

import Hello from './component.js'

render(
  <div id='app'>
    <Hello />
  </div>,
  document.getElementById('root')
)