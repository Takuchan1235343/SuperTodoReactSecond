import {BaseTaskList} from "./BaseTaskList";

export const CompleteTaskList = (props) => {
    const {tasks} = props

    return <BaseTaskList tasks={tasks} className="bg-emerald-200 rounded-lg p-4" title="完了のTODO"/>
}