import React from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword } from 'firebase/auth';
import {signInWithEmailAndPassword } from 'firebase/auth';


function SignUpScreen() {
  const emailRef = React.useRef(null)
  const passwordRef = React.useRef(null)

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userCredential) => {
      // Handle successful authentication
      const authUser = userCredential.user;
      console.log(authUser);
    }).catch((error) => {
      // Handle errors
      alert(error.message);
    });
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    }
    )
  }


  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signUpScreen__gray'>New to Netflix? </span>
          <span className='signUpScreen__link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen