import { Button } from './base/Button'
import { incompleteTask } from '../hooks/useTasks'
import { Title } from './base/Title'

export const CompleteTaskList = (props) => {
  const { tasks } = props
  return (
    <div className="bg-emerald-200 w-auto min-w-96 min-h-48 p-2 m-2 rounded-lg">
      <Title>完了のTODO</Title>
      <ul>
        {tasks.map((task) => (
          < Task
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  )
}

//Liのコンポーネント化

const Task = (props) => {
  const { task } = props

  return (
    <li className="flex align-middle">
      <p className="m-1.5">{task.title}</p>
      <Button onClick={() => incompleteTask(task.id)}>戻す</Button>
    </li>
  )
}