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
            className="bg-amber-200 flex flex-col md:flex-row justify-center w-full items-center rounded-lg "
            onSubmit={handleClickAdd}
        >
            <div className='p-2'>
                <Input
                    disabled={disabled}
                    placeholder="Todoを入力"
                    value={todoText}
                    onChange={handleChangeInput}
                />
            </div>
            <div className='p-2'>
                <Button
                    disabled={disabled}
                    onClick={handleClickAdd}
                >追加</Button>
            </div>
            {/*{disabled && (<p className="text-red-600">登録できるTODOは５個まで</p>)}*/}
        </Form>
    )
}