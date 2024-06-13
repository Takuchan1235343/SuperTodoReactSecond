import {useAuth} from './hooks/useAuth'
import {MainHeader} from './components/MainHeader'
import {MainContent} from './components/MainContent'
import {Login} from './components/Login'
import './index.css'

function App() {

    const {signUp, signIn, signOut, signInWithGoogle, user, errorMessage} = useAuth()

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
                    onClickGoogleSignIn={signInWithGoogle}
                    errorMessage={errorMessage}
                />

            )}
        </>
    )
}

export default App
