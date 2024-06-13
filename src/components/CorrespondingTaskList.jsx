import {Title} from "./base/Title";
import {Button} from "./base/Button";
import {completeTask, incompleteTask} from "../hooks/useTasks";
import {PriorityComboBox} from "./PriorityComboBox";
import {Calendar} from "./base/Calendar";


export const CorrespondingTaskList = (props) => {
    const {tasks} = props
    return (
        <div className="border-2 border-solid border-[#aacfd0] rounded-lg p-4">
            <Title>対応中のTODO</Title>
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

// Liをコンポーネント化

const Task = (props) => {
    const {task} = props

    return (
        <li className="flex items-center space-x-2 p-2">
            <p className="flex-1 m-1.5">{task.title}</p>
            <Button className="flex-none mx-1" onClick={() => completeTask(task.id)}>完了</Button>
            <Button className="flex-none mx-1" onClick={() => incompleteTask(task.id)}>未完了</Button>
            <PriorityComboBox className="flex-none mx-1" task={task}/>
            <Calendar className="flex-none mx-1"/>
        </li>
    )
}