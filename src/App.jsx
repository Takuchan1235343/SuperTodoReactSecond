import React from 'react'
import { useAuth } from './hooks/useAuth'
import { MainHeader } from './components/MainHeader'
import { MainContent } from './components/MainContent'
import { Login } from './components/Login'
import './styles.css'

function App () {

  const { signUp, signIn, signOut, user, errorMessage } = useAuth()

  return (
    <>
      {user ? (
        <>
          <MainHeader
            user={user}
            onClickSignOut={signOut}
          />
          <MainContent/>
        </>
      ) : (
        <Login
          onClickSignIn={signIn}
          onClickSignUp={signUp}
          errorMessage={errorMessage}
        />

      )}
    </>
  )
}

export default App
