import { Welcome } from './Welcome'
import { Button } from './base/Button'

export const MainHeader = (props) => {
  const { user, onClickSignOut } = props

  return (
    <header className=" flex-auto align-middle justify-between w-full max-w-6xl m-20 ">
      <Welcome user={user}/>
      <Menu>
        <Button onClick={onClickSignOut}>Sign Out</Button>
      </Menu>
    </header>
  )
}

const Menu = (props) => {
  const { children } = props
  return <div className="flex-auto align-middle">{children}</div>
}