import { Welcome } from './Welcome'
import { Button } from './base/Button'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '600px',
  margin: '20px auto',
}

export const MainHeader = (props) => {
  const { user, onClickSignOut } = props

  return (<header style={style}>
      <Welcome user={user}/>
      <Menu>
        <Button onClick={onClickSignOut}>Sign Out</Button>
      </Menu>
    </header>
  )
}

//signOutのスタイル
const menuStyle = {
  display: 'flex',
  alignItems: 'center',
}

const Menu = (props) => {
  const { children } = props
  return <div style={menuStyle}>{children}</div>
}