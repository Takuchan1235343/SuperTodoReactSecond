const style = {
  backgroundColor: '#aacfd0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',

}

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}