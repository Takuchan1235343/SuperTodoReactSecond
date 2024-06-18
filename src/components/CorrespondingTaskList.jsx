import {BaseTaskList} from "./BaseTaskList";
import {Droppable} from "react-beautiful-dnd";

export const CorrespondingTaskList = (props) => {
    const {tasks} = props

    return (
        <Droppable droppableId='corresponding'>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <BaseTaskList
                        tasks={tasks} className="border-2 border-solid border-[#aacfd0]  rounded-lg p-4"
                        title="対応中のTODO"
                    >
                        {provided.placeholder}
                    </BaseTaskList>
                </div>
            )}
        </Droppable>
    )
}
