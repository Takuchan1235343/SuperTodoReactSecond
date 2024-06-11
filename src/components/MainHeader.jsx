import { Welcome } from './Welcome'
import { Button } from './base/Button'

export const MainHeader = (props) => {
  const { user, onClickSignOut } = props

  return (
      // <header
      //     className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center bg-indigo-500 rounded-lg p-4">
      //     <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      //         <div>Welcome, {user.name}</div>
      //         <button
      //             onClick={onClickSignOut}
      //             className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 border-none cursor-pointer whitespace-nowrap"
      //         >
      //             Sign Out
      //         </button>
      //     </div>
      // </header>

      <header className="w-11/12 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around p-2 items-center bg-indigo-500 rounded-lg whitespace-nowrap">
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