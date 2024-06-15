import {BaseTaskList} from "./BaseTaskList";

export const CorrespondingTaskList = (props) => {
    const {tasks} = props

    return <BaseTaskList tasks={tasks} className="border-2 border-solid border-[#aacfd0]  rounded-lg p-4"
                         title="対応中のTODO"/>
}
