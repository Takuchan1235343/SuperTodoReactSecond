import {PopUpMenu} from "./PopUpMenu";
import {Button} from "./base/Button";
import {removeTask} from "../hooks/useTasks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Draggable} from "react-beautiful-dnd";

export const Task = (props) => {
    const {task, index} = props
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <li
                    className="flex items-center justify-between space-x-2 p-2 w-full task-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
            )}
        </Draggable>
    )
}