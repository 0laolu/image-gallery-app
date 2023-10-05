import { useState } from 'react'
import SignIn from './components/authentication/signIn/SignIn'
import SignUp from './components/authentication/SignUp'

function App() {

  return (
    <>
        <h1>tHIS is the APP component</h1>
        <SignIn />
        <SignUp />
    </>
  )
}

export default App
