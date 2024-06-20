import {useState} from 'react'

export const FilterTaskList = (props) => {

    const [category, setCategory] = useState('')
    const [priority, setPriority] = useState('')

    const {tasks} = props

    const handleChangeCategory = (e) => setCategory(e.target.value)
    const handleChangePriority = (e) => setPriority(e.target.value)


    const filterTasks = () => tasks.filter(task => {
        return (
            (category === '' || task.category === category) &&
            (priority === '' || String(task.priority) === String(priority))
        )
    })


    return (
        <div>
            <div className="bg-amber-200 flex flex-col md:flex-row justify-center w-full items-center rounded-lg p-2">
                <select
                    id='category'
                    value={category}
                    onChange={handleChangeCategory}
                    className='cursor-pointer border-2 rounded-lg p-1 px-4 text-center w-32'
                >
                    <option value="">カテゴリー</option>
                    <option value="work">仕事</option>
                    <option value="personal">個人</option>
                    <option value="family">家族</option>
                    <option value="shopping">買物</option>
                    <option value="study">学習</option>
                    <option value="health">健康</option>
                    <option value="other">その他</option>
                </select>

                <select
                    id='priority'
                    value={priority}
                    onChange={handleChangePriority}
                    className='cursor-pointer border-2 rounded-lg p-1 px-4 text-center w-32'
                >
                    <option value="">優先度</option>
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C</option>
                    <option value="1">D</option>
                </select>
            </div>
            <ul>
                {filterTasks().map((task) => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};