import {Title} from './base/Title'
import {StatusComboBox} from "./StatusComboBox";
import {PriorityComboBox} from "./PriorityComboBox";
import {Calendar} from "./base/Calendar";
import {Button} from "./base/Button";
import {removeTask} from "../hooks/useTasks";

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
        <li className="flex items-center justify-between space-x-2 p-2 w-full">
            <div className='w-1/4 break-words'>
                <p className="m-1.5">{task.title}</p>
            </div>
            <div className='w-1/2 flex flex-col items-center'></div>
            <div className='w-1/4 flex flex-col items-center'>
                <Button onClick={() => removeTask(task.id)}>消去</Button>
            </div>
        </li>
    )
}