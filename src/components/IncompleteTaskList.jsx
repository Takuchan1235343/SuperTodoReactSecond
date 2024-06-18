import {BaseTaskList} from "./BaseTaskList";
import {Droppable} from "react-beautiful-dnd";

export const IncompleteTaskList = (props) => {
    const {tasks} = props;

    return (
        <Droppable droppableId="incomplete">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <BaseTaskList
                        tasks={tasks}
                        className="border-2 border-solid border-[#aacfd0] rounded-lg p-4"
                        title="未完了のTODO"
                    >
                        {provided.placeholder}
                    </BaseTaskList>
                </div>
            )}
        </Droppable>
    );
};
