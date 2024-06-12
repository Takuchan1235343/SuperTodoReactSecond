import {useState} from 'react'
import {Button} from './base/Button'
import {Input} from './base/Input'
import {createTask} from '../hooks/useTasks'

export const CreateTaskForm = (props) => {
    const {disabled} = props

    const [todoText, setTodoText] = useState('')

    const handleChangeInput = (e) => setTodoText(e.target.value)
    const handleClickAdd = async () => {
        if (todoText === '') return

        await createTask(todoText)
        setTodoText('')
    }


    return (
        <div
            className="bg-amber-200 w-full max-w-4xl min-w-96  flex flex-col md:flex-row justify-around p-2  m-2 items-center rounded-lg whitespace-nowrap">
            <Input
                disabled={disabled}
                placeholder="Todoを入力"
                value={todoText}
                onChange={handleChangeInput}
                onEnter={handleClickAdd}
            />
            <Button
                disabled={disabled}
                onClick={handleClickAdd}
            >追加</Button>
            {/*{disabled && (<p className="text-red-600">登録できるTODOは５個まで</p>)}*/}
        </div>
    )
}