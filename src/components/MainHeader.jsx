import { Welcome } from './Welcome'
import { Button } from './base/Button'

export const MainHeader = (props) => {
  const { user, onClickSignOut } = props

  return (
    <header className="flex flex-col sm:flex-row sm:justify-between items-center align-middle w-full max-w-full m-20">
      <Welcome user={user}/>
      <Menu>
        <Button onClick={onClickSignOut}>Sign Out</Button>
      </Menu>
    </header>
  )
}

const Menu = (props) => {
  const { children } = props
  return <div className="flex justify-center w-full mr-5">{children}</div>
}