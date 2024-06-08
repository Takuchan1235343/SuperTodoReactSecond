import { useState } from 'react'

const style = {
  backgroundColor: 'bisque',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const InputTodo = (props) => {
  const { onClickAdd, disabled } = props;

  const [todoText, setTodoText] = useState('')

const handleChangeInput = (e) => setTodoText(e.target.value)
const handleClickAdd = async () => {
  if (todoText === '') return

  onClickAdd(todoText)
  setTodoText('')

    }

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={handleChangeInput}
      />
      <button disabled={disabled} onClick={handleClickAdd}>追加</button>
    </div>
  );
}