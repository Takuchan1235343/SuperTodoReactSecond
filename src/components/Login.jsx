import {Button} from './base/Button'
import {useState} from 'react'
import {Input} from './base/Input'
import {ErrorMessage} from './base/ErrorMessage'
import {Form} from "./base/Form";

export const Login = (props) => {
    const {onClickSignIn, onClickSignUp, errorMessage} = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form
            className="bg-emerald-200 w-[400px] p-2 m-2 rounded-lg"
            onSubmit={() => onClickSignIn(email, password)}
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
            <div>
                <Button onClick={() => onClickSignIn(email, password)}>Sign In</Button>
                <Button onClick={() => onClickSignUp(email, password)}>Sign Up</Button>
            </div>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>
    )

}