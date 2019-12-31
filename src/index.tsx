import React from 'react'
import ReactDOM from 'react-dom'
import { setCurrentPage } from 'redux/issuesDisplay'
import './index.css'

const render = () => {
  const { App } = require('./components/App');
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()
setCurrentPage(1)

if (module.hot) module.hot.accept('./components/App', render)
