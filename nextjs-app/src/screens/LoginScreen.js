import React from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
    const [signIn, setSignIn] = React.useState(false)

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
                className='loginScreen__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
                alt='' 
            />
            <button 
                className='loginScreen__button'
                onClick={() => setSignIn(true)}
            >Sign In</button>
            <div className='loginScreen__gradient' />
        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignUpScreen />
            ) : 
            (
            <>
                <h1>Unlimited films, TV programmes, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='loginScreen__input'>
                    <form>
                        <input type='email' placeholder='Email Address' />
                        <button 
                            onClick={() => setSignIn(true)}
                            className='loginScreen__getStarted'>
                            GET STARTED
                        </button>
                    </form>
                </div>
            </>

            )}
        </div>
    </div>
  )
}

export default LoginScreen