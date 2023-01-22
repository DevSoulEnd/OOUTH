import React from 'react'
import './profile.css'
import {FaUserAlt} from 'react-icons/fa'

export default function Profile() {
  return (
    <div className='profile'>
        <div className="profile-wrapper">
            <div className="profile-header">
                <FaUserAlt className='user'/>
                <h3 className='name'> Kehinde, Ayobami Stephen</h3>
            </div>

            <div className="cards-wrapper">
                <div className="cardd card1">
                    <p> Patient's Id: <span>242423353653</span> </p> 
                </div>

                <div className="cardd card2">
                    <p> Hospital IUC number: <span>1124262365368</span> </p> 
                </div>
            </div>
        </div>
    </div>
  )
}
