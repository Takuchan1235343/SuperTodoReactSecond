import { useState } from 'react'
import { Button } from './base/Button'
import { Input } from './base/Input'
import { createTask } from '../hooks/useTasks'

export const CreateTaskForm = (props) => {
  const { disabled } = props

  const [todoText, setTodoText] = useState('')

  const handleChangeInput = (e) => setTodoText(e.target.value)
  const handleClickAdd = async () => {
    if (todoText === '') return

    await createTask(todoText)
    setTodoText('')

  }

  return (
    <div className="bg-amber-200 w-[400px] p-2 m-2 rounded-lg ">
      <Input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={handleChangeInput}
      />
      <Button
        disabled={disabled}
        onClick={handleClickAdd}
      >追加
      </Button>
      {disabled && (<p className="ErrarMessage-red">登録できるTODOは５個まで</p>)}
    </div>
  )
}