import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/**
 npm install -D vite
 yarn create vite de05-react --template react
 npm install -D tailwindcss postcss autoprefixer
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
