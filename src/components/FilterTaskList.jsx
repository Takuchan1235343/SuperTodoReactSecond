import {useEffect, useState} from 'react'

export const FilterTaskList = ({tasks, onFilteredTasksChange}) => {

    const [category, setCategory] = useState('')
    const [priority, setPriority] = useState('')

    useEffect(() => {
        const filterTasks = () => {
            const filtered = tasks.filter(task => {
                return (
                    (category === '' || task.category === category) &&
                    (priority === '' || String(task.priority) === String(priority))
                )
            })
            onFilteredTasksChange(filtered)
        }
        filterTasks()
    }, [category, priority, tasks, onFilteredTasksChange]);

    return (
        <div>
            <div className="bg-amber-200 flex flex-col md:flex-row justify-center w-full items-center rounded-lg p-2">
                <select
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    onChange={(e) => setPriority(e.target.value)}
                    className='cursor-pointer border-2 rounded-lg p-1 px-4 text-center w-32'
                >
                    <option value="">優先度</option>
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C</option>
                    <option value="1">D</option>
                </select>
            </div>
        </div>
    );
};