import { useState } from 'react'
import { Button } from './base/Button'
import { Input } from './base/Input'

const style = {
  backgroundColor: 'bisque',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const CreateTaskList = (props) => {
  const { onClickAdd, disabled } = props

  const [todoText, setTodoText] = useState('')

  const handleChangeInput = (e) => setTodoText(e.target.value)
  const handleClickAdd = async () => {
    if (todoText === '') return

    onClickAdd(todoText)
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
    </div>
  )
}