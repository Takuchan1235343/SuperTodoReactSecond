import {Title} from "./base/Title";
import {Task} from "./Task";

export const BaseTaskList = (props) => {
    const {tasks, className, title} = props
    return (
        <div className={className}>
            <Title>{title}</Title>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    )
}