import {PopUpMenu} from "./PopUpMenu";
import {Button} from "./base/Button";
import {removeTask} from "../hooks/useTasks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useDrag} from "react-dnd";

export const Task = (props) => {
    const {task} = props

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'TASK',
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <li ref={drag} style={{opacity: isDragging ? 0.5 : 1}}
            className="flex items-center justify-between space-x-2 p-2 w-full"
        >

            <div className='w-1/3 break-words'>
                <p className="m-1.5">{task.title}</p>
            </div>

            <div
                className='w-1/3 flex flex-col items-center '
            >
                <PopUpMenu className="mx-1" task={task}/>
            </div>

            <div className='w-1/3 flex flex-col items-center '>
                <Button onClick={() => removeTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>

            </div>
        </li>
    )
}