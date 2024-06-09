import { useState } from 'react'
import { Button } from './base/Button'
import { Input } from './base/Input'
import { createTask } from '../hooks/useTasks'

const style = {
  backgroundColor: 'bisque',
  width: '400px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

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
    <div style={style}>
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
      {disabled && (<p style={{ color: 'red' }}>登録できるTODOは５個まで</p>)}
    </div>
  )
}