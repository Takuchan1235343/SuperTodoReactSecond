import {CreateTaskForm} from './CreateTaskForm';
import {IncompleteTaskList} from './IncompleteTaskList';
import {CompleteTaskList} from './CompleteTaskList';
import {CorrespondingTaskList} from './CorrespondingTaskList';
import {useTasks} from '../hooks/useTasks';
import {useEffect, useState} from 'react';
import {DragDropContext} from "react-beautiful-dnd";

export const MainContent = () => {
    const {incompleteTasks, completeTasks, correspondingTasks, changeStatus} = useTasks();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([...incompleteTasks, ...correspondingTasks, ...completeTasks]);
    }, [incompleteTasks, completeTasks, correspondingTasks]);

    const onDragEnd = async (result) => {
        if (!result.destination) return;

        const updatedTasks = Array.from(tasks);
        const [movedTask] = updatedTasks.splice(result.source.index, 1);
        await changeStatus(movedTask.id, result.destination.droppableId);
        movedTask.status = result.destination.droppableId;
        updatedTasks.splice(result.destination.index, 0, movedTask);

        setTasks(updatedTasks);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <main id='portal-root' className="flex flex-col items-center w-4/5 space-y-2">
                <CreateTaskForm className="w-full"/>
                <div id='portal-root' className="w-full space-y-2">
                    <IncompleteTaskList tasks={tasks.filter(task => task.status === 'incomplete')}/>
                    <CorrespondingTaskList tasks={tasks.filter(task => task.status === 'corresponding')}/>
                    <CompleteTaskList tasks={tasks.filter(task => task.status === 'complete')}/>
                </div>
            </main>
        </DragDropContext>
    );
};
