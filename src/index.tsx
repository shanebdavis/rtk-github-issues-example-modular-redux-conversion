import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const render = () => {
  const { App } = require('./components/App');
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()

if (module.hot) module.hot.accept('./components/App', render)
