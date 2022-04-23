import React from 'react'
import ReactDOM from 'react-dom/client'
import{ App} from './views/containers/App'
import './scss/index.scss'
import './scss/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
