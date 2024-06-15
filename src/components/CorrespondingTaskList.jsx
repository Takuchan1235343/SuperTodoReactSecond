import {Title} from "./base/Title";
import {Button} from "./base/Button";
import {removeTask} from "../hooks/useTasks";
import {PopUpMenu} from "./base/PopUpMenu";


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

const Task = (props) => {
    const {task} = props

    return (
        <li className="flex items-center justify-between space-x-2 p-2 w-full">
            <div className='w-1/3 break-words'>
                <p className="m-1.5">{task.title}</p>
            </div>
            <div
                className='w-1/3 flex flex-col items-center'>
                <PopUpMenu className="mx-1" task={task}/>
            </div>
            <div className='w-1/3 flex flex-col items-center'>
                <Button onClick={() => removeTask(task.id)}>消去</Button>
            </div>
        </li>

    )
}