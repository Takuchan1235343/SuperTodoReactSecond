import { Button } from './base/Button'
import { completeTask, removeTask } from '../hooks/useTasks'

const style = {
  border: '2px solid #aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const InCompleteTaskList = (props) => {
  const { tasks } = props
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
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
    < li>
      < div className="list-row">
        <p className="todo-item">{task.title}</p>
        <Button onClick={() => completeTask(task.id)}>完了</Button>
        <Button onClick={() => removeTask(task.id)}>削除</Button>
      </div>
    </li>
  )
}