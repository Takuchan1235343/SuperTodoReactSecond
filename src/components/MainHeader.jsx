import {Welcome} from './Welcome'
import {Button} from './base/Button'

export const MainHeader = (props) => {
    const {user, onClickSignOut} = props

    return (
        <header
            className="bg-indigo-500 w-4/5 flex flex-col md:flex-row justify-center
              rounded-lg">
            <Welcome user={user}/>
            <Menu>
                <Button onClick={onClickSignOut}>Sign Out</Button>
            </Menu>
        </header>
    )
}

const Menu = (props) => {
    const {children} = props
    return <div className="p-4">{children}</div>
}