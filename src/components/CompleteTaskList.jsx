import { Button } from './base/Button'
import { incompleteTask } from '../hooks/useTasks'
import { Title } from './base/Title'

const style = {
  backgroundColor: '#aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const CompleteTaskList = (props) => {
  const { tasks } = props
  return (
    <div style={style}>
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
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ margin: '6px' }}>{task.title}</p>
      <Button onClick={() => incompleteTask(task.id)}>戻す</Button>
    </li>
  )
}