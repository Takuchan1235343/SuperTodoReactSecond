import {BaseTaskList} from "./BaseTaskList";
import {useDrop} from "react-dnd";

export const CorrespondingTaskList = (props) => {
    const {tasks, moveTask} = props
    const [{isOver}, drop] = useDrop({
        accept: 'TASK',
        drop: (item) => {
            moveTask(item.id, 'corresponding')
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })


    return (
        <div ref={drop}
             style={{backgroundColor: isOver ? 'lightgray' : 'white'}}
        >
            <BaseTaskList tasks={tasks} className="border-2 border-solid border-[#aacfd0]  rounded-lg p-4"
                          title="対応中のTODO"/>
        </div>

    )
}
