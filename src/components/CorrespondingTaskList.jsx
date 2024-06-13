import {Title} from "./base/Title";
import {Button} from "./base/Button";
import {completeTask, incompleteTask} from "../hooks/useTasks";
import {PriorityComboBox} from "./PriorityComboBox";


export const CorrespondingTaskList = (props) => {
    const {tasks} = props
    return (
        <div className="border-2 border-solid border-[#aacfd0] min-w-96 m-2 min-h-96 p-4 rounded-lg">
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
        <li className="flex align-middle">
            <p className="m-1.5">{task.title}</p>
            <Button onClick={() => completeTask(task.id)}>完了</Button>
            <Button onClick={() => incompleteTask(task.id)}>未完了</Button>
            <PriorityComboBox task={task}/>
        </li>
    )
}