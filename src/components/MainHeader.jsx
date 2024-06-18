import {Welcome} from './Welcome'
import {Button} from './base/Button'

export const MainHeader = (props) => {
    const {user, onClickSignOut} = props

    return (
        <header className="bg-indigo-500 w-4/5 flex flex-col md:flex-row justify-center items-center rounded-lg">

            <Welcome user={user}/>

            <div className='p-4'>
                <Button onClick={onClickSignOut}>Sign Out</Button>
            </div>

        </header>
    )
}
