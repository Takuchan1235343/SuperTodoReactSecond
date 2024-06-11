import { Button } from './base/Button'
import { completeTask, removeTask } from '../hooks/useTasks'
import { Title } from './base/Title'

export const IncompleteTaskList = (props) => {
  const { tasks } = props
  return (
    <div className="border-2 border-solid border-[#aacfd0] m-2 min-w-96 min-h-96 p-4 rounded-lg ">
      <Title>未完了のTODO</Title>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  )
}

//Liをコンポーネント化

const Task = (props) => {
  const { task } = props

  return (
    <li className="flex align-middle">
      <p className="m-1.5">{task.title}</p>
      <Button onClick={() => completeTask(task.id)}>完了</Button>
      <Button onClick={() => removeTask(task.id)}>削除</Button>
    </li>
  )
}