import { Button } from './base/Button'
import { completeTask, removeTask } from '../hooks/useTasks'
import { Title } from './base/Title'

const style = {
  border: '2px solid #aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const IncompleteTaskList = (props) => {
  const { tasks } = props
  return (
    <div style={style}>
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
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ margin: '6px' }}>{task.title}</p>
      <Button onClick={() => completeTask(task.id)}>完了</Button>
      <Button onClick={() => removeTask(task.id)}>削除</Button>
    </li>
  )
}