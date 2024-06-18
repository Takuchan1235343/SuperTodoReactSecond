import {Title} from "./base/Title";
import {Task} from "./Task";

export const BaseTaskList = (props) => {
    const {tasks, className, title, children} = props;
    return (
        <div id='portal-root' className={className}>
            <Title>{title}</Title>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index}/>
                ))}
            </ul>
            {children}
        </div>
    );
};
