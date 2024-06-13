import {Button} from './base/Button'
import {correspondingTask, removeTask} from '../hooks/useTasks'
import {Title} from './base/Title'

export const CompleteTaskList = (props) => {
    const {tasks} = props
    return (
        <div className="bg-emerald-200 rounded-lg p-4">
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
        <li className="flex items-center space-x-2 p-2 h-16">
            <p className="flex-1 m-1.5">{task.title}</p>
            <Button className="flex-none mx-1" onClick={() => correspondingTask(task.id)}>対応中</Button>
            <Button className="flex-none mx-1" onClick={() => removeTask(task.id)}>削除</Button>
        </li>
    )
}