import {Button} from './base/Button'
import {useState} from 'react'
import {Input} from './base/Input'
import {ErrorMessage} from './base/ErrorMessage'
import {Form} from "./base/Form";

export const Login = (props) => {
    const {onClickSignIn, onClickSignUp, errorMessage, onClickGoogleSignIn,} = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form
            className="bg-emerald-200 w-11/12 max-w-xl min-w-96 mx-auto flex flex-col justify-around p-2 m-2 rounded-lg items-center space-y-2"
            onSubmit={() => onClickSignIn(email, password)}
        >

            <div
                className='flex flex-col justify-around w-11/12 max-w-4xl min-w-96 mx-auto p-2 m-2 rounded-lg items-center'
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='space-x-2'>
                <Button onClick={() => onClickSignIn(email, password)}>Sign In</Button>
                <Button onClick={() => onClickSignUp(email, password)}>Sign Up</Button>
            </div>

            <div>
                <Button onClick={() => onClickGoogleSignIn()}>Sign in with Google</Button>
            </div>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        </Form>


    )

}