import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img
                    src='https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square.jpg'
                    alt=''
                />
                <div className='profileScreen__details'>
                    <h2>
                        {user.email}
                    </h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <PlansScreen />

                        <button 
                            onClick={() => auth.signOut()}
                            className='profileScreen__signOut'>
                                Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen