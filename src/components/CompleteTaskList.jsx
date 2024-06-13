import {Button} from './base/Button'
import {correspondingTask, removeTask} from '../hooks/useTasks'
import {Title} from './base/Title'

export const CompleteTaskList = (props) => {
    const {tasks} = props
    return (
        <div className="bg-emerald-200 min-w-96 m-2 min-h-96 p-4 rounded-lg">
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

const Task = (props) => {
    const {task} = props

    return (
        <li className="flex align-middle">
            <p className="m-1.5">{task.title}</p>
            <Button onClick={() => correspondingTask(task.id)}>対応中</Button>
            <Button onClick={() => removeTask(task.id)}>削除</Button>
        </li>
    )
}