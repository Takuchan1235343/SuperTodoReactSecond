import {changeCategory} from "../hooks/useTasks";

export const CategoryComboBox = ({task}) => {
    const handleChange = (e) => {
        const newCategory = e.target.value
        return changeCategory(task.id, newCategory)
    }

    return (
        <li>

            <select id='category' value={task.category}
                    onChange={handleChange}
                    className=
                        'cursor-pointer border-2 rounded-lg p-1 px-4 text-center w-32'
            >
                <option value="work">仕事</option>
                <option value="parsonal">個人</option>
                <option value="family">家族</option>
                <option value="shopping">買物</option>
                <option value="study">学習</option>
                <option value="health">健康</option>
                <option value="other">その他</option>
            </select>

        </li>
    )
}
