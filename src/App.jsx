import {useAuth} from './hooks/useAuth'
import {MainHeader} from './components/MainHeader'
import {MainContent} from './components/MainContent'
import {Login} from './components/Login'
import './index.css'

function App() {

    const {signUp, signIn, signOut, signInWithGoogle, user, errorMessage} = useAuth()

    return (
        <div className='p-2'>
            {user ? (
                <div className='flex flex-col items-center space-y-2 w-full max-w-4xl min-w-sm mx-auto'>
                    <MainHeader
                        user={user}
                        onClickSignOut={signOut}
                    />
                    <MainContent/>
                </div>
            ) : (
                <Login
                    onClickSignIn={signIn}
                    onClickSignUp={signUp}
                    onClickGoogleSignIn={signInWithGoogle}
                    errorMessage={errorMessage}
                />

            )}
        </div>
    )
}

export default App
