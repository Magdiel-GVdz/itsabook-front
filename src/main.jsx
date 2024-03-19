import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './SuggestedFollowsCard/AppSuggestedFollows.jsx'
import TopNavBar from './TopNavBar/TopNavBar.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <TopNavBar/>
    <App />
  </div>
)
