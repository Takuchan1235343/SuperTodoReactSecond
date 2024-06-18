import {BaseTaskList} from "./BaseTaskList";
import {Droppable} from "react-beautiful-dnd";

export const CompleteTaskList = (props) => {
    const {tasks} = props

    return (
        <Droppable droppableId='complete'>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
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
        </Droppable>
    )
}