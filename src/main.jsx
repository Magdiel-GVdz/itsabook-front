import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './SuggestedFollowsCard/AppSuggestedFollows.jsx'
import TopNavBar from './TopNavBar/TopNavBar.jsx'
import SideBar from './SideBar/SideBar.jsx'
import CreateAccount from './CreateAccount/CreateAccount.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <section><TopNavBar/></section>
    <section><SideBar/></section>
    <App/>
    <section><CreateAccount/></section>
  </div>
)

