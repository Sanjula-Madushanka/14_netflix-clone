import  React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRoutere } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <BrowserRoutere>
    <App />
  </BrowserRoutere>,
  
  </React.StrictMode>
)
