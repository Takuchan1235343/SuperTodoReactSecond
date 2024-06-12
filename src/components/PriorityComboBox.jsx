import {changePriority} from '../hooks/useTasks'

export const PriorityComboBox = ({task}) => {
    const handleChange = (e) => {
        const newPriority = parseInt(e.target.value, 10)
        return changePriority(task.id, newPriority)
    }

    return (
        <li>
            <label className="m-1.5"> choose a priority</label>
            <select id='priority' value={task.priority}
                    onChange={handleChange}
                    className=
                        'cursor-pointer border-2 rounded-lg p-1 px-4 m-0 mx-0.5'
            >
                <option value="0">choice</option>
                <option value="1">LowImportantLowEmergency</option>
                <option value="2">LowImportantHighEmergency</option>
                <option value="3">highImportantLowEmergency</option>
                <option value="4">highImportantHighEmergency</option>
            </select>

        </li>
    )
}

