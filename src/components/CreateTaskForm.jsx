import {useState} from 'react'
import {Button} from './base/Button'
import {Input} from './base/Input'
import {createTask} from '../hooks/useTasks'
import {Form} from "./base/Form";

export const CreateTaskForm = () => {

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
                    placeholder="Todoを入力"
                    value={todoText}
                    onChange={handleChangeInput}
                />
            </div>

            <div className='p-2'>
                <Button
                    onClick={handleClickAdd}
                >
                    追加
                </Button>
            </div>
        </Form>
    )
}