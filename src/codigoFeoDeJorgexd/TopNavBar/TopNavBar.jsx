import React from 'react'
import './TopNavBar.css'
import itsabooklogo from './../images/itsabooklogo.png'
import usericon from './../images/userIcon.png'
import search from './../images/searchIcon.png'
import './index.css'

const TopNavBar = () => {
  return (
    <div className='topNavBar'>
      <img src={itsabooklogo} alt="" className='logo'/>
      <ul>
        <li>Feed</li>
        <li>Suggesions for you</li>
      </ul>

      <div className='searchBox'>
        <input type='text' placeholder='Search'/>
        <img src={search} alt="" />
      </div>

      <img src={usericon} alt="" className='profilePicture'/>

    </div>
  )
}

export default TopNavBar
