import {BaseTaskList} from "./BaseTaskList";
import {Draggable} from "react-beautiful-dnd";

export const CompleteTaskList = (props) => {
    const {tasks} = props

    return (
        <Draggable droppabled='complete'>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <BaseTaskList
                        tasks={tasks}
                        className="border-2 border-solid border-[#aacfd0]  rounded-lg p-4"
                        title="完了のTODO"
                    >
                        {provided.placeholder}
                    </BaseTaskList>
                </div>
            )}
        </Draggable>
    )
}