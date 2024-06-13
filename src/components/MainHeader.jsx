import {Welcome} from './Welcome'
import {Button} from './base/Button'

export const MainHeader = (props) => {
    const {user, onClickSignOut} = props

    return (
        <header
            className="bg-indigo-500 w-11/12 max-w-4xl min-w-96 mx-auto flex flex-col md:flex-row justify-around p-2 m-2 rounded-lg">
            <Welcome user={user}/>
            <Menu>
                <Button onClick={onClickSignOut}>Sign Out</Button>
            </Menu>
        </header>
    )
}

const Menu = (props) => {
    const {children} = props
    return <div className="p-2">{children}</div>
}