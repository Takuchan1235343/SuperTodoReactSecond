import {changePriority} from '../hooks/useTasks'

export const PriorityComboBox = ({task}) => {
    const handleChange = (e) => {
        const newPriority = parseInt(e.target.value, 10)
        return changePriority(task.id, newPriority)
    }

    return (
        <li>
            <select id='priority' value={task.priority}
                    onChange={handleChange}
                    className=
                        'cursor-pointer border-2 rounded-lg p-1 px-4 m-0 mx-0.5 items-center'
            >
                <option value="0">優先度を選択</option>
                <option value="1">あとで</option>
                <option value="2">ちょっと優先</option>
                <option value="3">優先</option>
                <option value="4">超優先</option>
            </select>

        </li>
    )
}

