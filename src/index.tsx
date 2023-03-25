import React from 'react'
import ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'

function Render() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement)
  root.render(<Render />)
}
