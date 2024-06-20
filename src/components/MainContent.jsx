import {CreateTaskForm} from './CreateTaskForm'
import {IncompleteTaskList} from './IncompleteTaskList'
import {CompleteTaskList} from './CompleteTaskList'
import {CorrespondingTaskList} from "./CorrespondingTaskList";
import {useTasks} from '../hooks/useTasks'
import {FilterTaskList} from "./FilterTaskList";

export const MainContent = () => {
    const {
        incompleteTasks,
        completeTasks,
        correspondingTasks,
        moveTask,
        allTasks
    } = useTasks()

    return (
        <main id='portal-root' className=" flex flex-col items-center w-4/5 space-y-2 ">

            <CreateTaskForm className="w-full"/>

            <FilterTaskList className="w-full" tasks={allTasks}/>

            <div id='portal-root' className="w-full space-y-2 ">
                <IncompleteTaskList tasks={incompleteTasks} moveTask={moveTask}/>
                <CorrespondingTaskList tasks={correspondingTasks} moveTask={moveTask}/>
                <CompleteTaskList tasks={completeTasks} moveTask={moveTask}/>
            </div>

        </main>
    )
}