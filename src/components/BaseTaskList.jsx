import {Title} from "./base/Title";
import {Task} from "./Task";
import {useState} from "react";
import {FilterTaskList} from "./FilterTaskList";

export const BaseTaskList = (props) => {
    const {tasks, className, title, children} = props;
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    return (
        <div id='portal-root' className={className}>
            <Title>{title}</Title>
            <FilterTaskList tasks={tasks} onFilteredTasksChange={setFilteredTasks}/>
            <ul>
                {filteredTasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index}/>
                ))}
            </ul>
            {children}
        </div>
    );
};
