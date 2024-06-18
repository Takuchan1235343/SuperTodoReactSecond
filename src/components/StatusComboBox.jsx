import {changeStatus} from '../hooks/useTasks'

export const StatusComboBox = ({task}) => {
    const handleChange = (e) => {
        const newStatus = e.target.value
        return changeStatus(task.id, newStatus)
    }

    return (
        <li>

            <select id='status' value={task.status}
                    onChange={handleChange}
                    className=
                        'cursor-pointer border-2 rounded-lg p-1 px-4  items-center w-32'
            >
                <option value="incomplete">未対応</option>
                <option value="corresponding">対応中</option>
                <option value="complete">完了</option>
            </select>

        </li>
    )
}