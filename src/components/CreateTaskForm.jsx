import {useState} from 'react'
import {Button} from './base/Button'
import {Input} from './base/Input'
import {createTask} from '../hooks/useTasks'
import {Form} from "./base/Form";

export const CreateTaskForm = (props) => {
    const {disabled} = props

    const [todoText, setTodoText] = useState('')

    const handleChangeInput = (e) => setTodoText(e.target.value)
    const handleClickAdd = async () => {
        if (todoText === '') return

        setTodoText('')
        await createTask(todoText)
    }


    return (
        <Form
            className="bg-amber-200   flex flex-col md:flex-row justify-around w-11/12 max-w-4xl  items-center rounded-lg whitespace-nowrap"
            onSubmit={handleClickAdd}
        >
            <Input
                disabled={disabled}
                placeholder="Todoを入力"
                value={todoText}
                onChange={handleChangeInput}
            />
            <Button
                disabled={disabled}
                onClick={handleClickAdd}
            >追加</Button>
            {/*{disabled && (<p className="text-red-600">登録できるTODOは５個まで</p>)}*/}
        </Form>
    )
}