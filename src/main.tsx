import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Applist from './view/appList/Applist'
import Condicionais from './view/condicionais/Condicionais'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Condicionais />
  </React.StrictMode>
)
