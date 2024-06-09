import React from 'react'
import Todo from './Todo'
import { useAuth } from './hooks/useAuth'
import { MainHeader } from './components/MainHeader'
import { MainContent } from './components/MainContent'
import { Login } from './components/Login'

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
          <MainContent><Todo/></MainContent>
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
