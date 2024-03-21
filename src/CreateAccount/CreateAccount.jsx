import React from 'react'
import './../index.css'
import './CreateAccount.css'
import {CreateAccountData} from './CreateAccountData'

function CreateAccount() {
  return (
    <div className='CreateAccount'>
        <ul className='CreateAccountList'>
        {CreateAccountData.map((val, key) =>{
            return <li
            key={key} className='row'
            onClick={() => {window.location.href= 'https://itsabook.auth.us-east-1.amazoncognito.com/login?client_id=4ugu2eg3cndlecr88eoarhajgv&response_type=code&scope=email+openid+profile&redirect_uri=https%3A%2F%2Fitsabook.site'}}>
                {" "}
            <div id='icon'> {val.icon}</div>{" "}    
            <div id="title">{val.title}</div>
            </li>
        })}
        </ul>
    </div>
  )
}

export default CreateAccount
